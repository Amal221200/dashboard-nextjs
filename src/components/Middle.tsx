"use client";
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
import CardWrapper from './CardWrapper';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphDataLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

export const GraphDataSets = [
  { label: 'Guest', data: [231, 225, 283, 91, 445], backgroundColor: '#98D89E', barThickness: 38, borderRadius: 5 },
  { label: 'User', data: [213, 71, 352, 180, 271], backgroundColor: '#EE8484', barThickness: 38, borderRadius: 5 }
]

const Middle = () => {
  // const [mobile, stIsMobile] = useState<boolean>(false)

  return (
    <section className='grid grid-cols-1 my-5'>
      <CardWrapper additionalClassNames='h-[50vh] relative w-full m-auto'>
        <Bar data={{ labels: GraphDataLabels, datasets: GraphDataSets, }} options={{
          // responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Activities',
              position: 'top' as const,

            },
            subtitle: {
              display: true,
              text: 'May - June 2021',
              position: 'top' as const,
              color: 'black',
              fullSize: true
            },
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              stacked: false,
              grid: {
                color: "rgba(0,0,0,0.1)"
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }} className='' />
      </CardWrapper>
    </section>
  )
}

export default Middle