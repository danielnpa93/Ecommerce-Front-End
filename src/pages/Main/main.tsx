import React from 'react';
import { ReduxProps } from '.';
import { MainContainer } from 'components/MainContainer';
import { AppContent } from 'components/Content';
import { AppBar } from './components/app-bar';
import { OrderTable } from './components/order-table';

export function EcommerceMain(props: ReduxProps) {
  const { orders, onListOrders, onLogout } = props || {};

  React.useEffect(() => {
    onListOrders();
  }, []);

  return (
    <MainContainer>
      <AppBar onLogout={onLogout} />
      <AppContent>
        <OrderTable orders={orders.data || []} />
      </AppContent>
    </MainContainer>
  );
}
