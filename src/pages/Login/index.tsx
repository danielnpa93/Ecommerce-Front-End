import { bindActionCreators, Dispatch } from 'redux';
import { authActions } from 'store/ducks/auth';
import { connect, ConnectedProps } from 'react-redux';
import { Login } from './login';
import { RootState } from 'store/typing';

const mapStateToProps = (state: RootState) => ({
  isLoading: Boolean(state.auth.isLoading),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ onLogin: authActions.login.request }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

export type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Login);
