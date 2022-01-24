import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'store/typing';
import { ordersActions } from 'store/ducks/orders';
import { teamsActions } from 'store/ducks/teams';
import { authActions } from 'store/ducks/auth';
import { connect, ConnectedProps } from 'react-redux';
import { EcommerceMain } from './main';

const mapStateToProps = (state: RootState) => ({
  orders: state.orders,
  isLoading: Boolean(state.orders?.isLoading),
  teams: state.teams,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onListOrders: ordersActions.list.request,
      onLogout: authActions.logout,
      onListTeams: teamsActions.list.request,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ReduxProps = ConnectedProps<typeof connector>;

export default connector(EcommerceMain);
