import styled from 'styled-components';

export const TableHeader = styled.thead`
  & > tr > th {
    padding: 10px 10px 25px 10px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    color: #5e5e5e;
  }
`;

export const TableLine = styled.tr`
  transition: all 0.5s;
  :hover {
    td {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  & > td {
    border-top: solid 1px var(--border-color);
    border-bottom: solid 1px var(--border-color);
    padding: 15px 10px;
    background: #fff;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);
    cursor: default;
    transition: background 0.5s ease-out;
  }

  & > td:first-child {
    border-left: solid 1px var(--border-color);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  & > td:last-child {
    border-right: solid 1px var(--border-color);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

export const TableCell = styled.td`
  :not(:first-child) {
    text-align: end;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 10px;
`;
