import { Skeleton } from 'components';
import {
  TableCell,
  TableHeader,
  TableLine,
  Table as StyledTable,
} from './styles';

interface IProps {
  items: any[];
  emptyMessage: string;
  header: IHead[];
  isLoading?: boolean;
  skeletonCount?: number;
}

interface IHead {
  id: string;
  value: string;
  options?: any;
  width?: string;
}

export function Table(props: IProps) {
  const { header, items, isLoading, emptyMessage, skeletonCount } = props || {};

  const renderRows = () => {
    if (isLoading) {
      return Array.from(Array(skeletonCount || 5).keys()).map(i => (
        <TableLine key={i}>
          {header.map((h, j) => (
            <TableCell width={h.width} key={j}>
              <Skeleton height="15" />
            </TableCell>
          ))}
        </TableLine>
      ));
    }

    const hasItems = items && items.length > 0;

    if (!hasItems) {
      return (
        <TableLine style={{ justifyContent: 'center' }}>
          <TableCell colSpan={header.length}>{emptyMessage}</TableCell>
        </TableLine>
      );
    }

    return items.map((row, i) => (
      <TableLine key={i}>
        {header.map((h, j) => (
          <TableCell width={h.width} key={j} {...(row.options || {})}>
            {row[h.id]}
          </TableCell>
        ))}
      </TableLine>
    ));
  };

  return (
    <StyledTable>
      <TableHeader>
        <tr>
          {header.map((h, i) => (
            <th {...(h.options || {})} key={i}>
              {h.value}
            </th>
          ))}
        </tr>
      </TableHeader>
      <tbody>{renderRows()}</tbody>
    </StyledTable>
  );
}
