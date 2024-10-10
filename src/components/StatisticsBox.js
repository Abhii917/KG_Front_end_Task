import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatisticsBox = ({ selectedMonth }) => {
  const [stats, setStats] = useState({ totalSales: 0, soldItems: 0, unsoldItems: 0 });

  const fetchStatistics = () => {
    axios.get(`http://your-api-url.com/statistics`, { params: { month: selectedMonth } })
      .then((response) => {
        setStats(response.data);
      }).catch((error) => {
        console.error('Error fetching statistics:', error);
      });
  };

  useEffect(() => {
    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div>
      <h3>Total Sales: ${stats.totalSales}</h3>
      <h3>Sold Items: {stats.soldItems}</h3>
      <h3>Unsold Items: {stats.unsoldItems}</h3>
    </div>
  );
};

export default StatisticsBox;
