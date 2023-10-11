"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CardWrapper from "../CardWrapper";

ChartJS.register(
    ArcElement, Tooltip, Legend
)

// const DoughnutData = {
//     labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'], datasets: [{
//         label: '',
//         data: [55, 31, 14],
//         backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484']
//     }]
// }

const BottomLeft = () => {

    return (
        <CardWrapper additionalClassNames="relative w-full h-full m-auto">
            <Doughnut data={{
                labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
                datasets: [
                    {
                        label: '',
                        data: [55, 31, 14],
                        backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                        weight: 30,
                        borderJoinStyle: 'bevel',
                        // clip: {left: 5, top: 10, right: -2, bottom: 10}
                    },
                ]
            }} options={{
                maintainAspectRatio: false,
            }} className='' />
        </CardWrapper>
    )
}

export default BottomLeft