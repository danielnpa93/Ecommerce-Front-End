import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: end;
`;

export const List = styled.li<{ active?: boolean }>`
  border: solid 1px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  background: ${({ active }) => (active ? 'rgba(0, 0, 0, 0.12)' : '#fff')};
  display: flex;
  align-items: center;

  transition: background 0.3s ease-out;

  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.12);
  :not(:first-child) {
    border-left: none;
  }

  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  /* :hover {
    background: rgba(0, 0, 0, 0.12);
  } */

  button {
    border: none;
    outline: none;
    background: transparent;
    width: 30px;
    height: 30px;

    cursor: pointer;
  }
`;
