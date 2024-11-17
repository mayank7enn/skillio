import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gaurav Bisht',
      role: 'AI Expert',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFQK7FvUtAVcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703487040625?e=1737590400&v=beta&t=O0Z1IDf_ExpoQ_OFDzstEMj50qDA9hHa_TmSC3S7Kj4',
      bio: 'Passionate about technology and AI, Gaurav is one of the co-founders of Skillio, working on making information more accessible through innovative tools.',
      linkedin: 'https://www.linkedin.com/in/gaurav-bisht-6422a01b2/',
    },
    {
      name: 'Mayank Sharma',
      role: 'Lead Developer',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHqpuTIoCipYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677498649683?e=1737590400&v=beta&t=h76vQLbbp6omEg5Qo-8WCQ3lCngwHzPAvelGvXhyP3Q',
      bio: 'With a deep interest in web development, Mayank is focused on creating seamless user experiences and advancing the Skillio platform.',
      linkedin: 'https://www.linkedin.com/in/mayank-sharma-757988220/',
    },
    {
        name: 'Sanyam Parashar',
        role: 'Researcher',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQG3f5eydJQuUA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710481402877?e=1737590400&v=beta&t=bWu_8H0258UdM_T4PCl-o9Lvx4W7F_-OmceT-e1MBpo',
        bio: 'Sanyam specializes in cutting-edge research and analysis, driving innovative solutions at Skillio. His work ensures the platform remains at the forefront of AI technology and user-centered development.',
        linkedin: 'https://www.linkedin.com/in/sanyam-parashar-1064a9230/',
    },
  ];

  return (
    <section id="team" className="w-full bg-gradient-to-r from-blue-50 to-white py-10">
      <div className="container mx-auto text-center mb-8 px-6">
        <h2 className="text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700">
          The brilliant minds behind Skillio, each contributing their expertise to make your experience better!
        </p>
      </div>

      {/* Team Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-blue-600">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.role}</p>
            <p className="text-gray-700 mt-4">{member.bio}</p>

            {/* Conditionally render the "Follow" button for members with LinkedIn profiles */}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <button className="mt-6 w-full px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                  Follow
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
