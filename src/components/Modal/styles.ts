import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  outline: 0;
  margin: 0;
  padding: 0;
  border: none;
  z-index: 1000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #f0f2f5;
  padding: 10px;

  h2 {
    font-size: 1.5rem;
    flex-grow: 1;
  }
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  border-radius: 50%;
  transition: background 0.3s;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
