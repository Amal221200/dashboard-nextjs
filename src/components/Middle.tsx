"use client"

import React from 'react';
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Activities',
      position: 'left'
    },
  },
};

export const GraphDataLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

export const GraphDataSets = [
  { label: 'Guest', data: [231, 225, 283, 91, 445], backgroundColor: '#98D89E', barThickness: 46, borderRadius: 5 },
  { label: 'User', data: [213, 71, 352, 180, 271], backgroundColor: '#EE8484', barThickness: 46, borderRadius: 5 }
]

const Middle = () => {
  return (
    <section className='my-5'>
      <CardWrapper additionalClassNames='h-[50vh] flex justify-center'>
        <Bar data={{ labels: GraphDataLabels, datasets: GraphDataSets, }} options={{
          responsive: true,
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
            }
          },
          aspectRatio: 7 / 3,
          
        }} className='w-full' />
      </CardWrapper>
    </section>
  )
}

export default Middle