import React from 'react';
import { ReduxProps } from '.';
import { Container, Content } from './styles';
import { AppBar } from './components/app-bar';
import { OrderTable } from './components/order-table';
import { Pagination } from 'components';

export function EcommerceMain(props: ReduxProps) {
  const { orders, isLoading, onListOrders, onLogout } = props || {};

  const handleListOrder = page => {
    onListOrders({ limit: 5, offset: page });
  };

  React.useEffect(() => {
    onListOrders({ limit: 5, offset: 1 });
  }, []);

  return (
    <Container>
      <AppBar onLogout={onLogout} />
      <Content>
        <OrderTable isLoading={isLoading} orders={orders.data || []} />
        <Pagination
          totalPages={orders?.totalPages || 1}
          currentPage={orders?.currentPage || 1}
          onChange={handleListOrder}
        />
      </Content>
    </Container>
  );
}
