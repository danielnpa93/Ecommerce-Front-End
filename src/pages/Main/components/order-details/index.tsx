import { Modal } from 'components';
import { useWindowSize } from 'hooks/windowSize';
import { Order } from 'store/typing';
import { modalStyles, Container, TableContainer } from './styles';
import { Table } from 'components';
import { getTimeString } from 'utils/timeString';
import { currencyFormatter } from 'utils/currencyFormatter';

interface IProps {
  onClose(): void;
  order: Order;
}

const FULL_WIDTH_MODAL = 450;

const getModalStyles = width => {
  if (width <= FULL_WIDTH_MODAL) {
    return {
      ...modalStyles,
      width: '100%',
      borderRadius: 'none',
      height: '100%',
      maxWidth: 'unset',
      maxHeight: 'unset',
    };
  }
  return { ...modalStyles };
};

const header = [
  {
    value: 'name',
    id: 'name',
    options: {
      align: 'initial',
    },
  },
  {
    value: 'description',
    id: 'description',
    options: {
      align: 'end',
    },
  },
  {
    value: 'amount',
    id: 'amount',
    options: {
      align: 'end',
    },
  },
];

export function OrderDetails({ order, onClose }: IProps) {
  const { width = 0 } = useWindowSize();

  const data = (() => {
    return order.products.map(p => ({
      name: p.name,
      description: p.description,
      amount: `R$ ${currencyFormatter(p.money)}`,
    }));
  })();

  return (
    <Modal
      style={getModalStyles(width)}
      title="Order Details"
      onClose={onClose}
    >
      <div>
        <Container>
          <li>
            <div className="label">Order Id</div>
            <div>{order.id}</div>
          </li>
          <li>
            <div className="label">Team Name</div>
            <div>{order.deliveryTeam.name}</div>
          </li>
          <li>
            <div className="label">Team Description</div>
            <div>{order.deliveryTeam.description}</div>
          </li>
          <li>
            <div className="label">Team Vehicle</div>
            <div>{order.deliveryTeam.vehicleIdentifier}</div>
          </li>
          <li>
            <div className="label">Adress</div>
            <div>{order.adress}</div>
          </li>
          <li>
            <div className="label">Created At</div>
            <div>{getTimeString(order.createdAt)}</div>
          </li>
          <li>
            <div className="label">Delivery At</div>
            <div>{getTimeString(order.deliveryDate)}</div>
          </li>
        </Container>
        <TableContainer>
          <Table
            header={header}
            items={data}
            emptyMessage="No products to show"
          />
        </TableContainer>
      </div>
    </Modal>
  );
}
