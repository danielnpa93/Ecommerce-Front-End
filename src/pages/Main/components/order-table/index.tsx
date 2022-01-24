import { Order } from 'store/typing';
import { Table } from 'components';
import { getTimeString } from 'utils/timeString';
import { useWindowSize } from 'hooks/windowSize';
import { TableButton } from './styles';

interface IProps {
  orders: Order[];
  isLoading?: boolean;
  onOpenOrderDetails(order: Order): void;
}

const getHead = (width: number) => {
  if (width > 900) {
    return [
      {
        value: 'order id',
        id: 'id',
        options: {
          align: 'initial',
        },
      },
      {
        value: 'team',
        id: 'deliveryTeam',
        options: {
          align: 'end',
        },
      },
      {
        value: 'created',
        id: 'createdAt',
        options: {
          align: 'end',
        },
      },
      {
        value: 'delivery',
        id: 'deliveryDate',
        options: {
          align: 'end',
        },
      },
      {
        value: 'adress',
        id: 'adress',
        options: {
          align: 'end',
        },
      },
      {
        value: 'products',
        id: 'product',
        options: {
          align: 'end',
        },
      },
      {
        value: '',
        id: 'action',
      },
    ];
  }

  return [
    // {
    //   value: 'order id',
    //   id: 'id',
    //   options: {
    //     align: 'initial',
    //   },
    // },
    {
      value: 'team',
      id: 'deliveryTeam',
      options: {
        align: 'end',
      },
    },
    // {
    //   value: 'created',
    //   id: 'createdAt',
    //   options: {
    //     align: 'end',
    //   },
    // },
    {
      value: 'delivery',
      id: 'deliveryDate',
      options: {
        align: 'end',
      },
    },
    {
      value: '',
      id: 'action',
    },
  ];
};

export function OrderTable({ orders, isLoading, onOpenOrderDetails }: IProps) {
  const { width = 0 } = useWindowSize();

  const getData = (data: Order[]) => {
    return data.map(d => ({
      id: d.id,
      createdAt: getTimeString(d.createdAt),
      deliveryDate: getTimeString(d.deliveryDate),
      adress: d.adress,
      deliveryTeam: d.deliveryTeam.name,
      product: d.products.reduce(
        (acc, cur, i) => (i !== 0 ? acc + ', ' + cur.name : cur.name),
        ''
      ),
      action: (
        <span>
          <TableButton onClick={() => onOpenOrderDetails(d)}>
            Show more
          </TableButton>
        </span>
      ),
    }));
  };

  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <Table
        isLoading={Boolean(isLoading)}
        header={getHead(width)}
        items={getData(orders)}
        emptyMessage="No orders to show"
      />
    </div>
  );
}
