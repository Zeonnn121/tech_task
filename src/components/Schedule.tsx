import React from 'react';
import { Clock } from 'lucide-react';
import { ScheduleItem } from '../types';

const scheduleItems: ScheduleItem[] = [
  {
    time: '5:30 AM',
    title: 'Assembly Point',
    description: 'Meet at FRCRCE College Campus. Attendance and safety briefing.'
  },
  {
    time: '6:00 AM',
    title: 'Departure',
    description: 'Depart for Kothaligad by private buses. Light breakfast provided during journey.'
  },
  {
    time: '9:00 AM',
    title: 'Reach Base Village',
    description: 'Arrive at Base village. Final instructions before starting the trek.'
  },
  {
    time: '11:15 AM',
    title: 'Reach the top of Kothaligad',
    description: 'Explore the fort, enjoy panoramic views, and click group photos.'
  },
  {
    time: '12:00 AM',
    title: 'Start Descend',
    description: 'Begin descending the trail with caution. Trek leaders assist throughout.'
  },
  {
    time: '2:00 PM',
    title: 'Reach Base Village',
    description: 'Complete the trek and return to the base. Refreshments and rest.'
  },
  {
    time: '2:45 PM',
    title: 'Depature From Kothaligad',
    description: 'Board buses and begin return journey towards Mumbai.'
  },
  {
    time: '4:00 PM',
    title: 'Halt for lunch at a restaurant',
    description: 'Enjoy a well-deserved meal at a local restaurant en route.'
  },
  {
    time: '5:30 PM',
    title: 'Head to Bandra Station',
    description: 'Trek conclusion and final dispersal.'
  },
  
  {
    time: '8:30 PM',
    title: 'Arrive at Bandra Station',
    description: 'Reach Bandra safely. End of the journey with memories to cherish.'
  }
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trek Schedule
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A detailed timeline of the day's activities
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
          
          {scheduleItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-12 md:mb-24 relative ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Time bubble */}
              <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-16 h-16 rounded-full bg-green-600 text-white items-center justify-center z-10">
                <Clock size={20} />
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Time for mobile */}
                <div className="md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white mb-4">
                  <Clock size={20} />
                </div>
                
                <div 
                  className={`md:w-1/2 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right' 
                      : 'md:pl-12 md:text-left md:order-last'
                  }`}
                >
                  <div className={`bg-white p-6 rounded-lg shadow-md inline-block transition-transform duration-300 hover:transform hover:scale-105 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                    <p className="text-green-600 font-semibold mb-2">{item.time}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Note: Schedule may be adjusted slightly based on weather conditions and group pace.
            Timings are approximate and participants are requested to be punctual for the
            assembly to ensure the day runs smoothly.
          </p>
          <a 
            href="#register" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;