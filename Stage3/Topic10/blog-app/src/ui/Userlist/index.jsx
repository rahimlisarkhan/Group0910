'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Userlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
      setData(res.data);
    }

    fetchData();
  }, []);

  // console.log('data', data);

  return (
    <div>
      Userlist
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.username}</p>
        </div>
      ))}
      {/* {data.map((item) => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
    ))} */}
    </div>
  );
}

export default Userlist;
