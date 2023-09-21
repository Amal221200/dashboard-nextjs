"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CardWrapper from "../CardWrapper";

ChartJS.register(
    ArcElement, Tooltip, Legend
)

export const DoughnutData = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'], datasets: [{
        label: '',
        data: [55, 31, 14],
        backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484']
    }]
}

const BottomLeft = () => {

    return (
        <CardWrapper additionalClassNames="flex-1 h-[500px] flex justify-center">
            <Doughnut data={{
                labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
                datasets: [
                    {
                        label: '',
                        data: [55, 31, 14],
                        backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                        weight: 30
                    },
                ]
            }} options={{
                responsive: true,
                spacing: 0,
            }} className='' />
        </CardWrapper>
    )
}

export default BottomLeft