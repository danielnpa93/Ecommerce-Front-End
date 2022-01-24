import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useWindowSize } from 'hooks/windowSize';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Team vs Orders Delivered',
    },
  },
};

const getDimensions = (width, maxWidth, aspectRatio) => {
  var newWidth = Math.min(width, maxWidth);

  var newHeight = newWidth / aspectRatio;

  return {
    newWidth,
    newHeight,
  };
};

export function TeamChart({ data }) {
  const { width = 0 } = useWindowSize();

  var { newWidth, newHeight } = getDimensions(width - 200, 500, 4 / 3);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: newWidth,
          height: newHeight,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
