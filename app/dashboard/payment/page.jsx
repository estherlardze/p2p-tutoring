'use client'

import React, { useState } from 'react';
//import axios from 'axios';

const PaymentForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // const handlePayment = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const response = await axios.post('https://api.paystack.co/transaction/initialize', {
  //     email,
  //     amount: amount * 100, // Paystack accepts amount in kobo
  //     name,
  //   }, {
  //     headers: {
  //       Authorization: `Bearer YOUR_SECRET_KEY`, // Replace with your Paystack secret key
  //       'Content-Type': 'application/json'
  //     }
  //   });

  //   const { authorization_url } = response.data.data;
  //   window.location.href = authorization_url; // Redirect to Paystack payment page
  // };

  return (
    <div className="w-xl mx-auto  min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Add Payment</h2>
      <form className=' bg-white p-8 rounded-lg shadow-md'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue/90 hover:bg-white hover:text-black border-2 border-blue/90 text-white font-bold py-[5px] transition-all duration-300 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
