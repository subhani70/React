import React from 'react';

const InternalTask = () => {
  const card = {
    width: '400px',
    backgroundColor: '#202731',
    borderRadius: '20px',
    padding: '30px',
    margin: '80px auto',
    color: 'white',
    fontFamily: 'sans-serif',
  };

  const logo = {
    height: '40px',
    width: '40px',
    backgroundColor: '#2e2e2c',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '20px',
  };

  const h1 = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const p = {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#d1d1d1',
  };

  const circleContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap:"30px",
    marginBottom: '40px',
  };

  const circle = {
    height: '45px',
    width: '45px',
    backgroundColor: '#262f38',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const button = {
    width: '100%',
    padding: '12px',
    borderRadius: '20px',
    backgroundColor: 'orange',
    border: 'none',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

return (
    <div style={card}>
        <div style={logo}>★</div>
        <h1 style={h1}>How did we do?</h1>
        <p style={p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ab unde aspernatur quisquam illo, harum quae consectetur animi repellat eos!
        </p>
        <div style={circleContainer}>
            <div style={circle}>1</div>
            <div style={circle}>2</div>
            <div style={circle}>3</div>
            <div style={circle}>4</div>
            <div style={circle}>5</div>
        </div>
        <button style={button}>SUBMIT</button>
    </div>
);
};

export default InternalTask;