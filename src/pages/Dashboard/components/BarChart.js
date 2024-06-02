import {useState} from 'react';
import { Chart } from 'primereact/chart';
import { FaEllipsisV } from '@react-icons/all-files/fa/FaEllipsisV';
import 'primereact/resources/themes/saga-blue/theme.css';  // theme
import 'primereact/resources/primereact.min.css';           // core css
import 'primeicons/primeicons.css'; 
import Transactions from './AllTransaction.json'                        // icons

const BarChart = () => {
    const [items,setItem01]=useState([])
    
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Item 01',
                backgroundColor: '#930006',
                borderColor: '#c0392b',
                data: [120, 150, 200, 250, 280, 240, 300, 160, 130, 170, 140, 200]
            },
            {
                label: 'Item 02',
                backgroundColor: '#f8d5d6',
                borderColor: '#e74c3c',
                data: [180, 170, 150, 210, 230, 220, 250, 180, 170, 190, 160, 220]
            }
        ]
    };
   
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `$${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Month'
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: false,
                    text: 'Amount'
                },
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return `$${value}`;
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    };
    
    return (
        <div className="mx-2 p-0">
            <div >
                <Chart type="bar" data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
