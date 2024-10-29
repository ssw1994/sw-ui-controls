import { createContext, forwardRef, useCallback, useContext } from "react";
import useTable from "./useTable";
import "./Table.scss";
import { Pagination } from "./Pagination";
import { Input } from "../Input/Input";

export const TableContext = createContext();

const TableHead = (props) => {
  const { headerStyle, header, field, sortable } = props;
  const { sortProps } = useContext(TableContext);
  const { updateSort, activeSortColumn } = sortProps;
  return (
    <th className="sw-table-head" style={headerStyle}>
      {header}
      {sortable && false && activeSortColumn?.field === field && (
        <i
          className={
            activeSortColumn?.order === "ASC"
              ? "fa-solid fa-sort-down"
              : "fa-solid fa-sort-up"
          }
          onClick={() => updateSort(props)}
        ></i>
      )}
      <ColumnFilter {...props} />
    </th>
  );
};

const ColumnFilter = (column) => {
  const { filter, filterType } = column;
  const { filteredProps } = useContext(TableContext);
  const { updateFilter } = filteredProps;
  if (!filter) return null;
  //filter types ['date','text','column','']
  if (filterType === "text") {
    return (
      <Input
        style={{ border: "1px solid lightgray" }}
        onChange={(e) => updateFilter(column, e.target.value)}
      />
    );
  }
};

const TableColumn = ({ item, column }) => {
  const dynamicStyle = column?.cellStyle?.(item) ?? {};
  return (
    <td
      className="sw-table-row-column"
      style={{
        ...column.style,
        cursor: column?.cellClicked ? "pointer" : "auto",
        ...dynamicStyle,
      }}
      key={column.field}
      onClick={(e) => {
        if (column?.cellClicked && typeof column?.cellClicked === "function") {
          e?.stopPropagation();
          column?.cellClicked(item[column.field]);
        }
      }}
    >
      {column.render && typeof column.render === "function"
        ? column.render(item)
        : item[column.field]}
    </td>
  );
};
const TableRows = (props) => {
  const { page, columnDefs } = useContext(TableContext);
  const { pageData } = page;
  const { rowStyle, rowClicked } = props;

  return pageData?.map((item, index) => {
    return (
      <tr
        className="sw-table-row"
        style={{ ...rowStyle(item) }}
        onClick={() => rowClicked(item)}
        key={index}
      >
        {columnDefs.map((column, i) => {
          return <TableColumn item={item} column={column} key={index + i} />;
        })}
      </tr>
    );
  });
};

export const TableHeader = () => {
  const { columnDefs } = useContext(TableContext);
  if (columnDefs && columnDefs instanceof Array) {
    return (
      <tr>
        {columnDefs.map((column) => {
          return <TableHead {...column} key={column.field} />;
        })}
      </tr>
    );
  }
  if (columnDefs && columnDefs instanceof Array === false)
    return (
      <tr>
        <th className="error">Column config should be array </th>
      </tr>
    );

  return (
    <tr>
      <th className="error">Column config is required</th>
    </tr>
  );
};

export const Table = (props) => {
  const { data, recordsPerPage, columnDefs, pagination, ...otherProps } = props;
  const updatedProps = useTable({
    data,
    recordsPerPage,
    columnDefs,
    pagination,
  });

  return (
    <TableContext.Provider value={updatedProps}>
      <table className="sw-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRows {...otherProps} />
          {updatedProps?.pagination && (
            <tr>
              <td colSpan={updatedProps?.columnDefs?.length}>
                <Pagination />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableContext.Provider>
  );
};
