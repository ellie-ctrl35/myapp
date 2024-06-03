import { useState ,useEffect} from "react";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css";
import { Chart } from "primereact/chart";
import NewUsers from "./NewUsers.json";

const NewUsersChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = NewUsers.users.map(
      (user) => user.month
    );
    const item01Data = NewUsers.users.map(
      (user) => user.item01
    );

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Item 01",
          backgroundColor: "#930006",
          borderColor: "#c0392b",
          data: item01Data,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Month",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value}`;
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="mx-2 p-0">
      <div>
        <Chart type="bar" data={chartData} options={options} />
      </div>
    </div>
  );
};

export default NewUsersChart;
