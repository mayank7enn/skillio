import React, { useState } from 'react';
import axios from 'axios';

const TranslatorTTS = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [action, setAction] = useState('Translate to English');
  const [isLoading, setIsLoading] = useState(false);

  const actions = [
    "Translate to English",
    "Translate to Hindi",
    "Translate to Tamil",
    "Translate to Telugu",
    "Translate to Kannada",
    "Translate to Bengali",
    "Translate to Marathi",
    "Translate to Gujarati",
    "Translate to Malayalam",
    "Translate to Punjabi",
    "Translate to Urdu",
    "Translate to Chinese",
    "Translate to Japanese",
    "Translate to French",
    "Translate to Spanish",
    "Translate to German",
    "Translate to Arabic",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://skillio-backend-eet7.onrender.com/api/translate', {
        inputText,
        action
      });

      setOutputText(response.data.outputText);
      setAudioUrl(response.data.audioUrl);
    } catch (error) {
      console.error('Error processing translation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="translator-tts">
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-10">
        <div className="container mx-auto px-6">
          <div
            className="mt-16 py-10 px-6 rounded-2xl shadow-lg text-center"
            style={{
              background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(67, 56, 202, 0.2), rgba(139, 92, 246, 0.2))',
            }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI text-to-audio
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate or chat..."
                required
                className="w-full p-4 h-32 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />

              <select
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full p-4 border-2 border-transparent rounded-md bg-white shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                {actions.map((act) => (
                  <option key={act} value={act}>
                    {act}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Translate & Generate Audio'}
              </button>
            </form>

            {outputText && (
              <div className="mt-6 bg-white p-6 rounded-md shadow-lg transition-all duration-700 ease-in-out">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Output:</h3>
                <p className="text-gray-800 mb-4">{outputText}</p>

                {audioUrl && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">Audio Output:</h4>
                    <audio controls className="w-full" src={audioUrl}>
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslatorTTS;
