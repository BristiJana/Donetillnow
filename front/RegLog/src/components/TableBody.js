const TableBody = ({ tableData, columns }) => {
  const tb = [];
  return (
    <tbody style={{ overflowY: "scroll", height: "50px" }}>
      {tableData.map((data) => {
        return (
          <>
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
              <td>
                <label class="checkbox-inline">
                  <input
                    type="checkbox"
                    class="checkinp"
                    value={data.id}
                    onChange={(e) => {
                      if (e.target.checked == true) {
                        const valee = tableData.filter(
                          (word) => word.id == e.target.value
                        );
                        console.log(valee[0]);
                        tb.push(valee[0]);
                        console.log(tb);
                      } else {
                      }
                    }}
                  />
                </label>
              </td>
            </tr>
          </>
        );
      })}
    </tbody>
  );
};

export default TableBody;
