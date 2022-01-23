import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.div`
  grid-area: content;
  margin: 20px;
`;
