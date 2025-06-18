import React, { useState } from 'react';

function App() {
  const exchangeRate = 73.66;
  const [dollar, setDollar] = useState('');
  const [rupee, setRupee] = useState('0');

  const handleDollarChange = (e) => {
    const value = e.target.value;
    setDollar(value);
    if (!isNaN(value) && value !== '') {
      setRupee((parseFloat(value) * exchangeRate).toFixed(2));
    } else {
      setRupee('');
    }
  };

  const handleRupeeChange = (e) => {
    const value = e.target.value;
    setRupee(value);
    if (!isNaN(value) && value !== '') {
      setDollar((parseFloat(value) / exchangeRate).toFixed(2));
    } else {
      setDollar('');
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>
        <span style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          {exchangeRate}
        </span>{' '}
        <strong>Indian Rupee</strong>
      </h2>

      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter Dollar"
          value={dollar}
          onChange={handleDollarChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            marginRight: '10px',
            border: '1px solid #ccc'
          }}
        />
        Doller
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Rupee"
          value={rupee}
          onChange={handleRupeeChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            marginRight: '10px',
            border: '1px solid #ccc'
          }}
        />
        Rupee
      </div>
    </div>
  );
}

export default App;