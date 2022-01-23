import styled, { css, keyframes } from 'styled-components';

const vividGradient = keyframes`
  0% { transform: translate3d(-100%, 0, 0); }
  100% { transform: translate3d(100%, 0, 0); }
`;

const a = css`
  ${vividGradient} 1.5s ease-in-out infinite
`;

const gradientAnimation = css`
  position: relative;
  overflow: hidden;
  background-color: #d8d8d8;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #d8d8d8, #eaeaea, #d8d8d8);
  }
}`;

export const SkeletonText = styled.div<any>`
  width: 100%;
  height: ${({ height }) => height}px;
  ${gradientAnimation};
  &:after {
    animation: ${a};
  }
`;
