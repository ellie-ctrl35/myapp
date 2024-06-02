import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { FaEllipsisV } from '@react-icons/all-files/fa/FaEllipsisV';
import 'primereact/resources/themes/saga-blue/theme.css';  // theme
import 'primereact/resources/primereact.min.css';           // core css
import 'primeicons/primeicons.css';                         // icons
import Transactions from './AllTransaction.json';

const BarChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const labels = Transactions.transactions.map(transaction => transaction.month);
        const item01Data = Transactions.transactions.map(transaction => transaction.item01);
        const item02Data = Transactions.transactions.map(transaction => transaction.item02);

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Item 01',
                    backgroundColor: '#930006',
                    borderColor: '#c0392b',
                    data: item01Data
                },
                {
                    label: 'Item 02',
                    backgroundColor: '#f8d5d6',
                    borderColor: '#e74c3c',
                    data: item02Data
                }
            ]
        });
    }, []);

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
                    label: function (tooltipItem) {
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
                
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return `${value}`;
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
            <div>
                <Chart type="bar" data={chartData} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
