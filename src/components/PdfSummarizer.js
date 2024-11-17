//code for the PdfSummarizer component frontend
import React, { useState } from 'react';
import axios from 'axios';

const PdfSummarizer = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummarize = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('https://skillio-backend-eet7.onrender.com/api/pdf/summarize', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing PDF:', error);
    }
  };

  const handleQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://skillio-backend-eet7.onrender.com/api/pdf/question', {
        question,
        context: summary,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  return (
    <section id="pdf-summarizer">
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-10">
        <div className="container mx-auto px-6">
          <div
            className="mt-16 py-10 px-6 rounded-2xl shadow-lg text-center"
            style={{
              background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(67, 56, 202, 0.2), rgba(139, 92, 246, 0.2))',
            }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PDF Summarizer and Q&A
            </h2>

            {/* Summarize PDF Section */}
            <form onSubmit={handleSummarize} className="space-y-6">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full p-4 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                Summarize PDF
              </button>
            </form>

            {/* Summary Section */}
            {summary && (
              <div className="mt-6 bg-white p-6 rounded-md shadow-lg transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-700">Summary:</h3>
                <p className="text-gray-800">{summary}</p>
              </div>
            )}

            {/* Ask Question Section */}
            <form onSubmit={handleQuestion} className="space-y-6 mt-6">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about the PDF"
                required
                className="w-full p-4 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                Ask Question
              </button>
            </form>

            {/* Answer Section */}
            {answer && (
              <div className="mt-6 bg-white p-6 rounded-md shadow-lg transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-700">Answer:</h3>
                <p className="text-gray-800">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfSummarizer;
