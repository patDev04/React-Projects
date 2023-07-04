import React, { useState, useEffect } from 'react';
import './tours.scss';
import axios from 'axios';
import ToursCard from './ToursCard';

const Tours = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, setErr] = useState('');

  const fetchData = async () => {
    setloading(true);
    try {
      await axios
        .get('https://my-json-server.typicode.com/patdev04/mockjson/tours')
        .then((res) => setData(res.data));
      setloading(false);
    } catch (error) {
      setloading(false);
      setErr(console.log(err));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const removeTour = (id) => {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  };

  return (
    <div className="tours">
      {loading && <p className="loading">loading...</p>}
      {err && <p>failed to retrive data...</p>}
      <div className="tours-list">
        {data.length === 0 && !loading ? (
          <div>
            <h1>no more date</h1>
            <button className="refresh-btn" onClick={() => fetchData()}>
              <h2>refresh</h2>
            </button>
          </div>
        ) : null}
        {data?.map((tours) => (
          <ToursCard key={tours.id} tour={tours} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
