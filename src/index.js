import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting />
    <UserCard />
    <Product />
    <Navbar />
  </React.StrictMode>
);

