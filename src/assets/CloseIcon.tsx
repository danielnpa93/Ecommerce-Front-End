import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
  width?: number;
  height?: number;
}

const CloseIcon = styled.svg`
  path {
    fill: none;
    stroke-width: 3px;
    stroke: rgb(158, 158, 158);
  }
`;

export default React.memo(({ width = 25, height = 15 }: IProps) => (
  <CloseIcon viewBox="0 0 26.401 26.401" width={width} height={height}>
    <path d="M25.681 25.693L.708.707M25.694.707L.708 25.693" />
  </CloseIcon>
));
