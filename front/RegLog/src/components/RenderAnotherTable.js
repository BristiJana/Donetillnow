import Table from "./Table";
import tableData2 from "./tableData2.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Id", accessor: "country", sortable: true },

  { label: "Type", accessor: "money", sortable: true },
];

const RenderAnotherTable = () => {
  return (
    <>
      <Table data={tableData2} columns={columns} />
    </>
  );
};

export default RenderAnotherTable;
