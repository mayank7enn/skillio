import React, { useState } from 'react';
import axios from 'axios';

const Helpdesk = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/helpdesk/query', { query });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error querying helpdesk:', error);
    }
  };

  return (
    <section id="helpdesk">
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-10">
        <div className="container mx-auto px-6">
          <div
            className="mt-16 py-10 px-6 rounded-2xl shadow-lg text-center"
            style={{
              background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(67, 56, 202, 0.2), rgba(139, 92, 246, 0.2))',
            }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Helpdesk
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              Ask anything and get your AI-generated answer instantly!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your question here..."
                required
                rows="4"
                className="w-full p-4 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                Ask
              </button>
            </form>
            {answer && (
              <div className="mt-8 bg-white p-6 rounded-md shadow-lg transition-all duration-700 ease-in-out">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                  Answer:
                </h3>
                <p className="text-gray-700">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helpdesk;
