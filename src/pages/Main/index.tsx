import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'store/typing';
import { ordersActions } from 'store/ducks/orders';
import { authActions } from 'store/ducks/auth';
import { connect, ConnectedProps } from 'react-redux';
import { EcommerceMain } from './main';

const mapStateToProps = (state: RootState) => ({
  orders: state.orders,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { onListOrders: ordersActions.list.request, onLogout: authActions.logout },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ReduxProps = ConnectedProps<typeof connector>;

export default connector(EcommerceMain);
