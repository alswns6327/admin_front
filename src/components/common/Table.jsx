import styled from "styled-components";
import Button from "./Button";
import palette from "../../lib/styles/palette";
import Input from "./Input";

const TableBlock = styled.div`
  table {
    width: 70vw;
    color: ${palette.gray[1]};
  }
  th {
    background-color: ${palette.gray[7]};
  }
  .headAndAdd {
    background-color: ${palette.gray[9]};
    color: ${palette.gray[1]};
  }
  td {
    background-color: ${palette.gray[6]};
    text-align: center;
  }
  input {
    width: 20%;
  }
`;
const Table = ({
  headerList,
  headerTitle,
  lists,
  listItemClick,
  handleAdd,
  handleSave,
  handleToggle,
  handleRemoveItem,
  handleChangeField,
  inputList,
}) => {
  if (lists.length !== inputList.length) return <></>;

  return (
    <TableBlock>
      <div style={{ textAlign: "right" }}>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="headAndAdd" colSpan={headerList.length}>
              {headerTitle}
            </th>
          </tr>
          <tr>
            {headerList.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lists.map((list, i) => (
            <tr
              key={"tr".concat(list.key)}
              onClick={
                listItemClick ? () => listItemClick(list.key) : () => null
              }
            >
              {list.items.map((item, j) => (
                <td key={item.value.concat(j)}>
                  {list.input ? (
                    <Input
                      onChange={(e) => {
                        handleChangeField(e.target, inputList[i].key);
                      }}
                      name={Object.keys(inputList[i].list[j])[0]}
                      value={
                        inputList[i].list[j][
                          Object.keys(inputList[i].list[j])[0]
                        ]
                      }
                    />
                  ) : (
                    item.value
                  )}
                </td>
              ))}
              <td>
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    list.input
                      ? handleSave(
                          inputList.filter((input) => input.key === list.key)
                        )
                      : handleToggle(list.key);
                  }}
                >
                  {list.input ? "저장" : "수정"}
                </Button>
              </td>
              <td>
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleRemoveItem(list.key);
                  }}
                >
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableBlock>
  );
};

export default Table;
