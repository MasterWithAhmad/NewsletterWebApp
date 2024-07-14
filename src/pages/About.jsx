// src/pages/About.jsx
import { useState, useEffect } from 'react';
import teamData from '../data/team.json';
import milestonesData from '../data/milestones.json';

function About() {
  const [team, setTeam] = useState([]);
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    // Simulate data fetch
    setTeam(teamData);
    setMilestones(milestonesData);
  }, []);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At our newsletter, we strive to bring you the latest updates on topics that matter the most.
          We believe in the power of information and its ability to inspire, educate, and empower.
        </p>
      </section>

      {/* Parent container for the side-by-side sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {team.length ? team.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-30 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-500 mt-2">{member.bio}</p>
              </div>
            )) : (
              <p className="text-gray-500">No team members found.</p>
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {milestones.length ? milestones.map(milestone => (
              <div key={milestone.id} className="bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 mb-2">{new Date(milestone.date).toLocaleDateString()}</p>
                <p className="text-gray-500">{milestone.description}</p>
              </div>
            )) : (
              <p className="text-gray-500">No milestones found.</p>
            )}
          </div>
        </section>
      </div>

      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
        <p className="text-gray-700 leading-relaxed">
          Follow us on our social media channels to stay updated with the latest news and stories.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default About;
