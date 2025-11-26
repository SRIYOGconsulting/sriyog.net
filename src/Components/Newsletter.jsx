
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}! We'll keep you updated.`); // A more friendly message
      setEmail('');
    }
  };

  return (
    <div className="bg-green-800 text-white text-center py-5 mb-5">
      <h3 className="text-xl font-bold mb-3">Join Our Newsletter</h3>
      <p className="mb-3 text-green-100">Stay in the loop with the latest updates from SRIVOG.</p>
      <form onSubmit={handleSubscribe} className="flex justify-center items-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 border-none rounded-md w-64 max-w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-green-800 border-none px-5 py-2 rounded-md font-bold hover:bg-yellow-300 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;