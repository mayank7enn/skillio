import React, { useEffect, useState } from 'react';

const Home = () => {
    const [leadsGenerated, setLeadsGenerated] = useState(0);
    const [salesClosed, setSalesClosed] = useState(0);
    const [renewals, setRenewals] = useState(0);

    // Count-up animation on load
    useEffect(() => {
        const animateValue = (start, end, duration, setValue) => {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const current = Math.min(
                    Math.floor(progress / duration * (end - start) + start),
                    end
                );
                setValue(current);
                if (progress < duration) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        animateValue(0, 2648, 2000, setLeadsGenerated);
        animateValue(0, 890, 2000, setSalesClosed);
        animateValue(0, 297, 2000, setRenewals);
    }, []);

    return (
        <section id='home' className="bg-gradient-to-r from-blue-50 to-white text-gray-800">
            {/* Hero Section */}
            <div className="container mx-auto p-10 md:p-16 text-center">
                <h1
                    className="text-xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Welcome!
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-700">
                    Unlock your productivity with tools designed to summarize videos, assist with queries, and more!
                </p>
                <a
                    href="#video-summarizer"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Explore Features
                </a>

                {/* Statistics Section */}
                <div
                    className="mt-16 py-10 px-6 rounded-2xl shadow-lg text-center"
                    style={{
                        background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(67, 56, 202, 0.2), rgba(139, 92, 246, 0.2))'
                    }}
                >
                    <h2 className="text-4xl font-semibold mb-8 text-blue-700">
                        See Skillio's Impact in Action
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                            <span className="text-5xl font-bold text-gray-900">{leadsGenerated}+</span>
                            <p className="text-xl font-medium text-gray-600 mt-3">Videos Summarized</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                            <span className="text-5xl font-bold text-gray-900">{salesClosed}+</span>
                            <p className="text-xl font-medium text-gray-600 mt-3">PDFs Summarized</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                            <span className="text-5xl font-bold text-gray-900">{renewals}+</span>
                            <p className="text-xl font-medium text-gray-600 mt-3">Questions Answered</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
