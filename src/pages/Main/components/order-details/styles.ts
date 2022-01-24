import styled from 'styled-components';

export const modalStyles = {
  width: '70%',
  maxWidth: '700px',
  borderRadius: '5px',
  maxHeight: '90%',
  overflow: 'auto',
};

export const Container = styled.ul`
  list-style-type: none;
  li {
    margin-top: 10px;
    & > div:first-child {
      font-weight: 500;
      margin-bottom: 5px;
    }

    & > div:last-child {
      background: #d8d8d8;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

export const TableContainer = styled.div`
  & > table > thead > tr > th {
    padding-bottom: 5px;
  }
`;
