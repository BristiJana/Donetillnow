import Table from "./Table";
import tableData1 from "./tableData1.json";

const columns = [{ label: "Quantity", accessor: "full_name", sortable: true }];

const RenderAgain = () => {
  return (
    <>
      <Table data={tableData1} columns={columns} />
    </>
  );
};

export default RenderAgain;
