import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import "../App.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

function Charts() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [3.5, 2.5, 4.7, 4, 4.3, 2, 4.5, 5, 4.7, 4, 3.8, 3.6, 3.7],
        backgroundColor: [
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#5D12D2",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
          "#EAEAEA",
        ],

        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const Ddata = {
    labels: ["X", "Y", "Z"],
    datasets: [
      {
        label: "Poll",
        data: [2, 7, 5],
        backgroundColor: ["#FF3FA4", "#5D12D2", "#EAEAEA"],
        borderColor: ["#FF3FA4", "#5D12D2", "#EAEAEA"],
      },
    ],
  };

  
  // const doughnutLabel = {
  //   id: 'doughnutLabel',
  //   beforeDatasetsDraw(chart, args, pluginOptions){
  //     const {ctx, data} = chart;
  //     ctx.save();
  //     const xCoor = chart.getDatasetMeta(0).data[0].x;
  //     const yCoor = chart.getDatasetMeta(0).data[0].y;

  //     ctx.font = 'bold 30px sans-serif';
  //     ctx.fillStyle  = 'blue';
  //     ctx.textAlign = 'center';
  //     ctx.fillText('text', xCoor, yCoor);
  //   }
  // }

  const doughnutLabel = {
    id: 'doughnutLabel',
    beforeDraw: function (chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const { canvas } = args.chart;
  
      const text = 'Center Text';
      const fontSize = 30;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
  
      ctx.save();
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = 'blue';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, centerX, centerY);
      ctx.restore();
    },
  };
  
  const Doptions = {
    maintainAspectRatio: false,
    plugins: { doughnutLabel,
      legend: {
        display: false,
      },
    },

  };



  return (
    <>
      <div className="chart-container">
        <div className="chart-left-container-div">
          <div className="chart-hd">
            <div className="chart-hd-txt">
              <h4>Overview</h4>
              <p>Monthly Earning</p>
            </div>
            <div className="chart-hd-dropd">
              <select
                className="dropDown"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="option1">Quarterly</option>
                <option value="option2">X</option>
                <option value="option3">Y</option>
              </select>
            </div>
          </div>
          <div className="chart">
            <Bar className="barChart" data={data} options={options}></Bar>
          </div>
        </div>
        <div className="chart-right-container-div">
          <div className="doughnut-hd">
            <h4>Customers</h4>
            <p>Customers that buy products</p>
          </div>
          <div className="doughnut-box">
            <Doughnut data={Ddata} options={Doptions} className="DDDougnut"> </Doughnut>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
