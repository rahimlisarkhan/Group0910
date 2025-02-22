import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Parent from './components/Parent';

import { useFormik } from 'formik';

import { addPostData, getPostsData, rmvPostData } from './services/posts';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { title: '', body: '' },
    onSubmit: addSubmitData,
  });

  useEffect(() => {
    initData();
  }, []);

  async function addSubmitData(values, options) {
    console.log('values', values);
    try {
      const response = await addPostData(values);
      const newPost = response.data;
      setPosts([newPost, ...posts]);
      console.log('response', response);
      options.resetForm();
      // initData();
    } catch (err) {
      console.log(err);
    }
  }

  async function initData() {
    const response = await getPostsData();
    console.log('response', response);
    setPosts(response.data);
    setLoading(false);
  }

  async function removePost(id) {
    try {
      console.log('removePost -> id', id);
      const response = await rmvPostData(id);
      console.log('response', response);
      // initData();

      let newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        {loading && <h1>Loading...</h1>}
        {count > 5 && count < 10 && <Parent count={count} />}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={values.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            value={values.body}
            name="body"
            placeholder="Body"
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {posts.map((post) => (
          <div key={post.id}>
            <span>{post.title}</span>
            <button onClick={() => removePost(post.id)}>Click</button>
          </div>
        ))}
        <br />
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
