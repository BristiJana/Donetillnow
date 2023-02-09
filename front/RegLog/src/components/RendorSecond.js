import Table from "./Table";
import tableData1 from "./tableData2.json";

const columns = [
  { label: "ID", accessor: "id", sortable: true },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Type", accessor: "country", sortable: true },
  { label: "Quantity", accessor: "money", sortable: true },
];

const RenderSecond = () => {
  return (
    <>
      <Table data={tableData1} columns={columns} />
    </>
  );
};

export default RenderSecond;
