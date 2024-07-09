import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [hours, setHours] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const savedEntries = localStorage.getItem('entries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
    
    // Automatically log 1 hour upon entering the page
    logInitialHour();
  }, []); // Empty dependency array ensures this effect runs only once

  const saveEntriesToLocalStorage = (updatedEntries) => {
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  };

  const handleAddEntry = () => {
    if (hours) {
      setShowConfirmation(true);
    }
  };

  const confirmAddEntry = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const dateTime = `${currentDate} ${currentTime}`;

    const updatedEntries = [...entries, { hours, date: dateTime }];
    setEntries(updatedEntries);
    setHours('');
    setShowConfirmation(false);

    saveEntriesToLocalStorage(updatedEntries);
  };

  const cancelAddEntry = () => {
    setShowConfirmation(false);
  };

  const handleDeleteEntry = (index, event) => {
    event.stopPropagation();
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    saveEntriesToLocalStorage(updatedEntries);
  };

  const logInitialHour = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const dateTime = `${currentDate} ${currentTime}`;

    const initialEntry = { hours: '1', date: dateTime }; // Log 1 hour initially
    const updatedEntries = [...entries, initialEntry];
    setEntries(updatedEntries);
    saveEntriesToLocalStorage(updatedEntries);
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',  // Align items vertically
    justifyContent: 'flex-end',
    marginTop: '27px',
  };

  const inputStyle = {
    borderRadius: '8px',
    border: '3px solid #ddd',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    marginRight: '10px',
    fontSize: '1em',
    width: '150px',
    height: '50px',
    boxSizing: 'border-box',
    color: 'black',
    textAlign: 'center',
  };

  const buttonStyle = {
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '110px',
    backgroundColor: 'red',
    color: 'white',
  };

  const deleteButtonStyle = {
    backgroundColor: 'white',
    color: 'red',
    width: '30px',
    height: '30px',
    fontSize: '1.2em',
    borderRadius: '4px',
    border: 'solid',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto', // Centers the button within the td
  };
  

  const alertStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    zIndex: 999,
    display: showConfirmation ? 'block' : 'none',
    border: '3px solid black',
  };

  const yesButtonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: '3px solid black',
    marginRight: '10px',
  };

  const noButtonStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: '3px solid black',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    color: 'black',
  };

  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '4em', marginBottom: '20px' }}>Volunteer Dashboard</h1>
      <h2 style={{ color: 'black', fontSize: '2em', marginBottom: '25px' }}>Past Volunteer Hours</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Hours</th>
            <th style={thStyle}>Date & Time</th>
            <th style={{ ...thStyle, width: '100px' }}>Confirmation</th> {/* Adjusted width for Confirmation */}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td style={cellStyle}>{entry.hours}</td>
              <td style={cellStyle}>{entry.date}</td>
              <td style={{ ...cellStyle }}>
                <button
                  style={deleteButtonStyle}
                  onClick={(event) => handleDeleteEntry(index, event)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={containerStyle}>
        <input
          type="number"
          placeholder="Input Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={handleAddEntry}>Enter</button>
      </div>

      <div style={alertStyle}>
        <p>Are you sure you want to add this entry?</p>
        <button style={yesButtonStyle} onClick={confirmAddEntry}>Yes</button>
        <button style={noButtonStyle} onClick={cancelAddEntry}>No</button>
      </div>
    </div>
  );
}

export default Dashboard;
