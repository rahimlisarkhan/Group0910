import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Button';
import { Gender, Profile } from './types/blog.types';

const userdata: Profile = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  status: 'active',
  createdAt: new Date(),
  gallery: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    null,
  ],
  imgData: null, // could be a base64 string, Blob, or any custom image format
  gender: Gender.MALE,
  isActive: true,
  isAdmin: false,
  img_url: 'https://example.com/avatar.jpg',
  role: ['admin', 'user', 'guest'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    zip: '10001',
  },
};

function App() {
  const [count, setCount] = useState(0);

  // const data = Gender.FEMALE;

  // const a = Gender.FEMALE == data ? '1' : '0';

  console.log(userdata.address.country);

  return (
    <>
      <div>
        <Button
          title="Create"
          onClick={() => {
            console.log('Create');
          }}
        />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
