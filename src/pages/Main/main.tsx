import React from 'react';
import { ReduxProps } from '.';
import { Container, Content } from './styles';
import { AppBar } from './components/app-bar';
import { OrderTable } from './components/order-table';
import { Pagination } from 'components';
import { TeamChart } from './components/chart';
import { Order, TeamDetails } from 'store/typing';
import { pallet } from 'utils/pallets';
import { OrderDetails } from './components/order-details';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const getData = (teams: TeamDetails[]) => {
  var firstDate = new Date(
    Math.max.apply(
      null,
      teams.map(x => new Date(x.firstDateTime).getTime())
    )
  );

  var lastDate = new Date(
    Math.max.apply(
      null,
      teams.map(x => new Date(x.lastDateTime).getTime())
    )
  );

  var data = {
    labels: [
      `${new Date(firstDate).toLocaleDateString()} - ${new Date(
        lastDate
      ).toLocaleDateString()}`,
    ],
    datasets: teams.map((t, i) => ({
      label: t.name,
      data: [t.ordersCount],
      backgroundColor: pallet[i],
    })),
  };

  return data;
};

export function EcommerceMain(props: ReduxProps) {
  const { orders, isLoading, teams, onListOrders, onLogout, onListTeams } =
    props || {};

  const [orderDetails, setOrderDetails] = React.useState<Order>();

  const handleListOrder = page => {
    onListOrders({ limit: 5, offset: page });
  };

  React.useEffect(() => {
    onListOrders({ limit: 5, offset: 1 });
    onListTeams();
  }, []);

  return (
    <>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {orderDetails && (
          <OrderDetails
            onClose={() => setOrderDetails(undefined)}
            order={orderDetails}
          />
        )}
      </ReactCSSTransitionGroup>

      <Container>
        <AppBar onLogout={onLogout} />
        <Content>
          <TeamChart data={getData(teams?.data || [])} />
          <OrderTable
            onOpenOrderDetails={o => setOrderDetails(o)}
            isLoading={isLoading}
            orders={orders.data || []}
          />
          <Pagination
            totalPages={orders?.totalPages || 1}
            currentPage={orders?.currentPage || 1}
            onChange={handleListOrder}
          />
        </Content>
      </Container>
    </>
  );
}
