import React, { useState } from 'react';
import axios from 'axios';

const VideoSummarizer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');

    try {
      const response = await axios.post('/api/video/summarize', { videoUrl });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing video:', error);
      setError('Could not summarize the video. Please check the URL or try another video.');
    } finally {
      setLoading(false);
    }
  };

  const renderSummaryList = () => {
    if (!summary) return null;

    const bulletPoints = summary
      .split('•')
      .filter((item) => item.trim() !== '')
      .map((item, index) => (
        <li key={index} className="ml-4 mb-2 text-gray-800">
          {item.trim()}
        </li>
      ));

    return (
      <ul className="list-disc pl-6 mt-4 bg-white p-4 rounded-md shadow-lg transition-all duration-700 ease-in-out">
        {bulletPoints}
      </ul>
    );
  };

  return (
    <section id="video-summarizer">
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-10">
        <div className="container mx-auto px-6">
          <div className="mt-16 py-10 px-6 rounded-2xl shadow-lg text-center"
            style={{
              background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(67, 56, 202, 0.2), rgba(139, 92, 246, 0.2))'
            }}>
            <h2 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              YouTube Video Summarizer
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter YouTube video URL"
                required
                className="w-full p-4 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                Summarize
              </button>
            </form>

            {loading && (
              <div className="mt-4 text-center text-blue-600">
                <p>Loading...</p>
              </div>
            )}

            {error && (
              <div className="mt-4 text-red-500">
                <p>{error}</p>
              </div>
            )}

            {summary && !loading && (
              <div className="transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-700 mt-6">Summary:</h3>
                {renderSummaryList()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSummarizer;
