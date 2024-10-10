import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import StatisticsBox from './components/StatisticsBox';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('March');

  return (
    <div className="App">
      <h1>Transactions Dashboard</h1>

      {/* Month Selector */}
      <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        {/* Add remaining months */}
      </select>

      {/* Components */}
      <TransactionsTable selectedMonth={selectedMonth} />
      <StatisticsBox selectedMonth={selectedMonth} />
      <BarChart selectedMonth={selectedMonth} />
      <PieChart selectedMonth={selectedMonth} />
    </div>
  );
}

export default App;
