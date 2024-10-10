import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({});

  const fetchPieChartData = () => {
    axios.get(`http://your-api-url.com/pie-chart`, { params: { month: selectedMonth } })
      .then((response) => {
        const data = response.data;
        setChartData({
          labels: Object.keys(data),
          datasets: [{
            label: 'Number of Items',
            data: Object.values(data),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
          }]
        });
      }).catch((error) => {
        console.error('Error fetching pie chart data:', error);
      });
  };

  useEffect(() => {
    fetchPieChartData();
  }, [selectedMonth]);

  return <Pie data={chartData} />;
};

export default PieChart;
