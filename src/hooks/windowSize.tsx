import React from 'react';

interface StateProps {
  width?: number;
  height?: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<StateProps>({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
