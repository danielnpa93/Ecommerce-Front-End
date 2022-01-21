import React from 'react';
import { ReduxProps } from '.';
import { MainContainer } from 'components/MainContainer';
import { AppBar } from './components/app-bar';

export function EcommerceMain(props: ReduxProps) {
  const { orders, onListOrders, onLogout } = props || {};

  React.useEffect(() => {
    onListOrders();
    console.log(orders);
  }, []);

  return (
    <MainContainer>
      <AppBar onLogout={onLogout} />
    </MainContainer>
  );
}
