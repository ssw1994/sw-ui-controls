import { useEffect, useMemo, useState } from "react";

export function useSorting(props) {
  const { columnDefs } = props;
  const [columns, updateColumns] = useState([]);

  useEffect(() => {
    if (columnDefs && columnDefs instanceof Array) {
      const columnSortConfig = columnDefs
        .filter((column) => column.sortable)
        .map((column) => {
          return {
            field: column.field,
            active: column?.sorted ?? false,
            order: column && column.order ? column.order : "ASC",
          };
        });
      updateColumns(columnSortConfig);
    }
  }, [columnDefs]);

  const activeColumn = useMemo(() => {
    return columns.find((column) => column.active);
  }, [columns]);

  const updateSort = (column) => {
    updateColumns((columns) => {
      return columns.map((c) => {
        return {
          ...c,
          active: column.field === c.field,
          order: c.order === "ASC" ? "DSC" : "ASC",
        };
      });
    });
  };

  return {
    activeSortColumn: activeColumn,
    updateSort,
    ...props,
  };
}

export function useFilter(props) {
  const [columns, updateColumns] = useState(null);
  const { columnDefs } = props;
  useEffect(() => {
    if (columnDefs && columnDefs instanceof Array) {
      const columnFilter = columnDefs.map((column) => {
        const activeColumnFilter = columns?.find(
          (c) => column.field === c.field
        );
        return {
          field: column.field,
          filterValues: activeColumnFilter?.filterValues ?? [],
        };
      });
      updateColumns(columnFilter);
    }
  }, [columnDefs]);

  const reset = (column) => {};

  const clearAllFilter = () => {};

  const updateFilter = (column, filterValue) => {
    const c = columns.map((item) => {
      if (item.field === column.field) {
        return {
          ...item,
          filterValues: [filterValue],
        };
      }
      return item;
    });
    updateColumns(c);
  };

  return {
    columns: columns,
    filters: columns,
    reset,
    clearAllFilter,
    updateFilter,
    ...props,
  };
}

export function usePagination(props) {
  const [currentPage, updateCurrentPage] = useState(null);
  const [pageDetails, updateCurrentPageDetails] = useState(null);
  const { data, recordsPerPage, filters, activeSortColumn, pagination } = props;

  const filteredData = useMemo(() => {
    let items = props.data;
    const hasNoFilter = filters?.every(({ filterValues }) => {
      if (!filterValues) return true;
      if (filterValues instanceof Array && filterValues.length === 0)
        return true;
      return false;
    });
    if (activeSortColumn) {
      items = items.sort((item1, item2) => {
        return item1[activeSortColumn.field] > item2[activeSortColumn.field] &&
          activeSortColumn.order === "ASC"
          ? 1
          : -1;
      });
    }
    if (hasNoFilter) return [...items];
    filters
      ?.filter(({ filterValues }) => filterValues?.length >= 1)
      .forEach((column) => {
        items = items.filter((item) => {
          let fieldValue = item[column.field];
          if (typeof fieldValue !== "string") {
            fieldValue = "" + fieldValue;
          }
          return column.filterValues.some((value) =>
            fieldValue.includes(value)
          );
        });
      });

    return items;
  }, [filters, activeSortColumn, props?.data]);

  const getPageConfig = () => {
    let tempData = filteredData ? filteredData : data;
    const lastDataOnPageIndex = currentPage
      ? recordsPerPage * currentPage
      : recordsPerPage * 1;
    const firstDataOnPageIndex = lastDataOnPageIndex - recordsPerPage;
    let pageData = [];
    if (tempData instanceof Array) {
      pageData = tempData.slice(firstDataOnPageIndex, lastDataOnPageIndex);
    }
    const totalPages = Math.ceil(tempData?.length / recordsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    return {
      currentPage,
      isFirstPage,
      isLastPage: pagination ? isLastPage : true,
      totalPages: pagination ? totalPages : 1,
      pageSize: recordsPerPage,
      totalData: tempData?.length,
      pageData: pagination ? pageData : tempData,
    };
  };

  const updatePage = (pageNumber) => {
    updateCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage >= pageDetails?.totalPages) return;
    updateCurrentPage(pageDetails?.currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    updateCurrentPage(currentPage - 1);
  };
  const gotoLastPage = () => {
    updateCurrentPage(pageDetails?.totalPages);
  };
  const gotoFirstPage = () => {
    updateCurrentPage(1);
  };

  useEffect(() => {
    updateCurrentPage(1);
  }, []);

  useEffect(() => {
    updateCurrentPage(1);
  }, [filteredData]);

  useEffect(() => {
    updateCurrentPageDetails(getPageConfig());
  }, [currentPage, filteredData, getPageConfig]);

  return {
    ...pageDetails,
    updatePage,
    nextPage,
    prevPage,
    gotoLastPage,
    gotoFirstPage,
  };
}

export default function useTable(props) {
  const { data, recordsPerPage, columnDefs } = props;
  const sortProps = useSorting(props);
  const filteredProps = useFilter(sortProps);
  const pagination = usePagination(filteredProps);
  return {
    ...props,
    filteredProps,
    sortProps,
    data,
    page: pagination,
    columnDefs,
    recordsPerPage,
  };
}
