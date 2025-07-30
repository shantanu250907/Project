import React from 'react';
import { FaBell, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Sidebar from './Sidebar';

export default function LoginDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Search</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaBell className="text-xl text-gray-600 cursor-pointer hover:text-blue-500" />
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Login Card */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Welcome Back 👋
          </h1>
          <form>
            <label className="block mb-4">
              <span>Email address</span>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </label>
            <label className="block mb-6 relative">
              <span>Password</span>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <FaArrowLeft className="absolute right-3 top-10 text-gray-400" />
            </label>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
}
