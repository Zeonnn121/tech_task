import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Footslog
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An annual tradition of adventure, challenge, and camaraderie organized by the
            Rotaract Club of Fr. Conceicao Rodrigues College of Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              More Than Just A Trek
            </h3>
            <p className="text-gray-600 mb-6">
              Footslog began in 2017 as a way to encourage students to disconnect from technology
              and reconnect with nature. Over the years, it has evolved into our flagship event,
              drawing participants from across colleges and communities.
            </p>
            <p className="text-gray-600 mb-6">
              Our treks are carefully selected to offer varying levels of challenge while
              showcasing the breathtaking natural beauty of the Western Ghats. Each route is
              scouted and prepared by our experienced team to ensure safety while maximizing
              the adventure experience.
            </p>
            <p className="text-gray-600">
              Beyond just physical challenge, Footslog is about building lasting memories,
              pushing personal boundaries, and fostering an appreciation for environmental
              conservation.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Users className="text-green-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-800">150+</h4>
                <p className="text-gray-600 text-sm">Annual Participants</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Calendar className="text-green-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-800">8+</h4>
                <p className="text-gray-600 text-sm">Years of Tradition</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-800">5+</h4>
                <p className="text-gray-600 text-sm">Trails Explored</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="2024.png"
                alt="Group of hikers on a mountain" 
                className="rounded-lg shadow-xl w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <span className="block text-3xl font-bold text-green-600">2024</span>
                <span className="text-sm text-gray-600">Edition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;