import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({});

  const fetchBarChartData = () => {
    axios.get(`http://your-api-url.com/bar-chart`, { params: { month: selectedMonth } })
      .then((response) => {
        const data = response.data;
        setChartData({
          labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'],
          datasets: [{
            label: 'Number of Items',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
          }]
        });
      }).catch((error) => {
        console.error('Error fetching bar chart data:', error);
      });
  };

  useEffect(() => {
    fetchBarChartData();
  }, [selectedMonth]);

  return <Bar data={chartData} />;
};

export default BarChart;
