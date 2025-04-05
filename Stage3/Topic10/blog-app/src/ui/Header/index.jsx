import React from 'react';
import { UserInfo } from './UserInfo';

function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Logo</h1>
      <nav className="space-x-4 flex items-center gap-2">
        <UserInfo />

        <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </a>
        <a
          href="/posts"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Posts
        </a>
        <a
          href="/user-create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create
        </a>
      </nav>
    </header>
  );
}

export default Header;
