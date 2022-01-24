import { Modal } from 'components';
import { useWindowSize } from 'hooks/windowSize';
import { Order } from 'store/typing';
import { modalStyles } from './styles';

interface IProps {
  onClose(): void;
  order: Order;
}

const FULL_WIDTH_MODAL = 450;

const getModalStyles = width => {
  debugger;
  if (width <= FULL_WIDTH_MODAL) {
    return {
      // ...modalStyles,
      width: '100%',
      borderRadius: 'none',
      height: '100%',
      maxWidth: 'unset',
    };
  }
  return {};
};

export function OrderDetails({ order, onClose }: IProps) {
  const { width = 0 } = useWindowSize();
  return (
    <Modal
      style={getModalStyles(width)}
      title="Order Details"
      onClose={onClose}
    >
      <ul>
        <li>Order Id: {order.id}</li>
        <li>Team Name: {order.deliveryTeam.name}</li>
        <li>Team Vehicle: {order.deliveryTeam.vehicleIdentifier}</li>
        <li>Team Description: {order.deliveryTeam.description}</li>
        <li>Adress: {order.adress}</li>
        <li>Created At: {order.createdAt}</li>
        <li>Delivery At: {order.deliveryDate}</li>
        {/* <li>
        Products: {order.products}
      </li> */}
        <li>Adress: {order.adress}</li>
      </ul>
    </Modal>
  );
}
