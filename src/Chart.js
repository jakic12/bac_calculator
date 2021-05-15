import styled from "styled-components";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "BAC",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(0,0,0)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.5,
    },
  },
  scales: {
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },

        suggestedMin: 0,
        suggestedMax: 100,
      },
    ],
  },
};

const Padding = styled.div`
  padding: 20px;
`;

const LineChart = () => (
  <Padding>
    <Line data={data} options={options} />
  </Padding>
);

export default LineChart;
