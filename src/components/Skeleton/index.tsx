import { SkeletonText } from './styles';

export function Skeleton({ height, ...others }) {
  return <SkeletonText height={height} {...others} />;
}
