import { lazy } from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./pages/Auth/Login'));
const Home = lazy(() => import('./pages/Main/Home'));
const Product = lazy(() => import('./pages/Main/Product'));
const Process = lazy(() => import('./pages/Main/Process'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/process" element={<Process />} />
        {/*  <Route path="/products/:id" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
