import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  const fetchTransactions = () => {
    axios.get(`http://your-api-url.com/transactions`, {
      params: {
        month: selectedMonth,
        search: searchText,
        page
      }
    }).then((response) => {
      setTransactions(response.data);
    }).catch((error) => {
      console.error('Error fetching transactions:', error);
    });
  };

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchText, page]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => fetchTransactions()}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default TransactionsTable;



