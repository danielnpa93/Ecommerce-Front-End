import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
  width?: number;
  height?: number;
}

const CloseIcon = styled.svg``;

export default React.memo(({ width = 25, height = 25 }: IProps) => (
  <CloseIcon
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke-width="8"
      stroke="#fff"
      stroke-dasharray="50.26548245743669 50.26548245743669"
      fill="none"
      stroke-linecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      ></animateTransform>
    </circle>
  </CloseIcon>
));
