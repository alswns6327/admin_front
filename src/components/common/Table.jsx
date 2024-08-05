import styled from "styled-components";
import Button from "./Button";
import palette from "../../lib/styles/palette";

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
`;
const Table = ({
  headerList,
  headerTitle,
  list,
  listItemClick,
  handleRemoveItem,
}) => {
  return (
    <TableBlock>
      <Button>+</Button>
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
          {list.map((items) => (
            <tr
              key={"tr".concat(items.key)}
              onClick={
                listItemClick ? () => listItemClick(items.key) : () => null
              }
            >
              {items.items.map((item) => (
                <td key={item}>{item}</td>
              ))}
              <td>
                <Button onClick={() => handleRemoveItem(items.key)}>
                  수정
                </Button>
              </td>
              <td>
                <Button onClick={() => handleRemoveItem(items.key)}>
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
