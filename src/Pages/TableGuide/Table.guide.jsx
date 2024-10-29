import { useEffect, useState } from "react";
import { Tab } from "../../components/Tabs";
import { Tabs } from "../../components/Tabs/Tabs";
import { Table } from "../../components/Table/Table";

export default function TableGuide() {
  const [data, setData] = useState([
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
    {
      userId: 1,
      id: 4,
      title: "non esse culpa molestiae omnis sed optio",
    },
    {
      userId: 1,
      id: 5,
      title: "eaque aut omnis a",
    },
    {
      userId: 1,
      id: 6,
      title: "natus impedit quibusdam illo est",
    },
    {
      userId: 1,
      id: 7,
      title: "quibusdam autem aliquid et et quia",
    },
    {
      userId: 1,
      id: 8,
      title: "qui fuga est a eum",
    },
    {
      userId: 1,
      id: 9,
      title: "saepe unde necessitatibus rem",
    },
    {
      userId: 1,
      id: 10,
      title: "distinctio laborum qui",
    },
  ]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData([...response]);
      });
  }, []);
  const albumTableColumnConfig = [
    {
      header: "User ID",
      field: "userId",
      render: (item) => {
        return "Hello" + item?.userId;
      },
      headerStyle: {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
      },
      style: {
        fontWeight: "normal",
        fontSize: "14px",
        color: "gray",
      },
      sortable: true,
      filter: false,
      filterType: "text",
      comparator: (item, item2) => {},
    },
    {
      header: "ID",
      field: "id",
      headerStyle: {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
      },
      style: {
        fontWeight: "normal",
        fontSize: "14px",
        color: "gray",
      },
      sortable: true,
      filter: true,
      filterType: "text",
      comparator: (item, item2) => {},
      cellClicked: (item) => {
        alert("You clicked cell ---> " + item);
      },
      cellStyle: (item) => {
        if (item.id % 2) {
          return {
            backgroundColor: "lightgreen",
            color: "red",
          };
        }
        return {
          backgroundColor: "lightyellow",
          color: "black",
        };
      },
    },
    {
      header: "Title",
      field: "title",
      headerStyle: {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
      },
      style: {
        fontWeight: "normal",
        fontSize: "14px",
        color: "gray",
      },
      sortable: true,
      filter: true,
      filterType: "text",
      comparator: (item, item2) => {},
    },
  ];

  const getRowStyle = (item) => {
    if (item.id % 2 === 0) {
      return {
        backgroundColor: "lightgreen",
        color: "black",
        cursor: "not-allowed",
        pointerEvents: "none",
      };
    }
    return {
      backgroundColor: "lightblue",
      color: "red",
    };
  };

  const clickedRow = (item) => {
    alert("You clicked row with ID --->" + item.id);
  };

  return (
    <div>
      <h1>Table Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Table
            data={data}
            columnDefs={albumTableColumnConfig}
            recordsPerPage={5}
            pagination={true}
            rowClicked={clickedRow}
            rowStyle={getRowStyle}
          />
        </Tab>
        <Tab header="Code">
          <pre style={{ overflow: "auto", height: "400px" }}>
            <code>
              {`
                const albumTableColumnConfig = [
                  {
                    header: "User ID",
                    field: "userId",
                    render: (item) => {
                      return "Hello" + item?.userId;
                    },
                    headerStyle: {
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "black",
                    },
                    style: {
                      fontWeight: "normal",
                      fontSize: "14px",
                      color: "gray",
                    },
                    sortable: true,
                    filter: true,
                    filterType: "text",
                    comparator: (item, item2) => {},
                  },
                  {
                    header: "ID",
                    field: "id",
                    headerStyle: {
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "black",
                    },
                    style: {
                      fontWeight: "normal",
                      fontSize: "14px",
                      color: "gray",
                    },
                    sortable: true,
                    filter: true,
                    filterType: "text",
                    comparator: (item, item2) => {},
                    cellClicked: (item) => {
                      alert("You clicked cell ---> " + item);
                    },
                    cellStyle: (item) => {
                      if (item.id % 2) {
                        return {
                          backgroundColor: "lightgreen",
                          color: "red",
                        };
                      }
                      return {
                        backgroundColor: "lightyellow",
                        color: "black",
                      };
                    },
                  },
                  {
                    header: "Title",
                    field: "title",
                    headerStyle: {
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "black",
                    },
                    style: {
                      fontWeight: "normal",
                      fontSize: "14px",
                      color: "gray",
                    },
                    sortable: true,
                    filter: true,
                    filterType: "text",
                    comparator: (item, item2) => {},
                  },
                ];

                const getRowStyle = (item) => {
                  if (item.id % 2 === 0) {
                    return {
                      backgroundColor: "lightgreen",
                      color: "black",
                      cursor: "not-allowed",
                      pointerEvents: "none",
                    };
                  }
                  return {
                    backgroundColor: "lightblue",
                    color: "red",
                  };
                };

                const clickedRow = (item) => {
                  alert("You clicked row with ID --->" + item.id);
                };
                <Table
                  data={data}
                  columnDefs={albumTableColumnConfig}
                  recordsPerPage={5}
                  pagination={true}
                  rowClicked={clickedRow}
                  rowStyle={getRowStyle}
                />`}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
