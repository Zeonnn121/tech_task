import React from 'react';
import { 
  MapPin, 
  Mountain, 
  Clock, 
  Calendar, 
  Thermometer, 
  Backpack, 
  AlertCircle, 
  Shield 
} from 'lucide-react';
import { EventDetail } from '../types';

const eventDetails: EventDetail[] = [
  {
    icon: 'MapPin',
    title: 'Location',
    description: 'Kothaligad, XGR7+R5Q, Peth, Karjat, Maharashtra 415407.'
  },
  {
    icon: 'Mountain',
    title: 'Difficulty',
    description: 'The Kothaligad (Peth Fort) trek is generally considered to be of easy to moderate difficulty, making it suitable for beginners and those with average fitness levels'
  },
  {
    icon: 'Clock',
    title: 'Duration',
    description: '1 Day Trek (6-7 hours of actual trekking time plus breaks and activities)'
  },
  {
    icon: 'Calendar',
    title: 'Date',
    description: 'August 15, 2025 . Early morning departure from FR. CRCE bandra.'
  },
  {
    icon: 'Thermometer',
    title: 'Weather',
    description: 'Expected temperature: 20-24°C. Moderate humidity with chance of light showers in August.'
  },
  {
    icon: 'Backpack',
    title: 'What to Bring',
    description: 'Sturdy shoes, 2L water, rain protection, sunscreen, hat, light snacks, basic first aid, ID proof, and camera.'
  },
  {
    icon: 'AlertCircle',
    title: 'Important Notes',
    description: 'Trek will proceed in light rain but may be rescheduled in case of severe weather warnings.'
  },
  {
    icon: 'Shield',
    title: 'Safety Measures',
    description: 'Professional trek leaders, safety briefing, first aid facilities, and emergency evacuation plan in place.'
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'MapPin': return <MapPin size={24} className="text-green-600" />;
    case 'Mountain': return <Mountain size={24} className="text-green-600" />;
    case 'Clock': return <Clock size={24} className="text-green-600" />;
    case 'Calendar': return <Calendar size={24} className="text-green-600" />;
    case 'Thermometer': return <Thermometer size={24} className="text-green-600" />;
    case 'Backpack': return <Backpack size={24} className="text-green-600" />;
    case 'AlertCircle': return <AlertCircle size={24} className="text-green-600" />;
    case 'Shield': return <Shield size={24} className="text-green-600" />;
    default: return <Mountain size={24} className="text-green-600" />;
  }
};

const EventDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Event Details
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the next Footslog 2025 trek
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventDetails.map((detail, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  {getIcon(detail.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Trek Route Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
              The trek to Kothaligad, also known as Peth Fort, offers a delightful mix of scenic beauty, adventure, and historical exploration. Starting from Ambivli or Karjat, the trail winds through quaint villages, dense woods, and gentle slopes, culminating in a steep climb to the pinnacle carved into the rock face.
              </p>
              <p className="text-gray-600 mb-4">
              The fort features a unique chimney-like tunnel leading to the summit, where you'll be rewarded with panoramic views of the Western Ghats, including Bhimashankar and other nearby peaks. During the monsoon, the trail is brought to life with gushing streams, vibrant greenery, and misty mountain backdrops.
              </p>
              <p className="text-gray-600">
              Our local trek leaders will share captivating stories about the fort’s role during the Maratha reign, giving you a glimpse into 13th-century architecture and fortification techniques. This trek is perfect for beginners and nature enthusiasts, offering not just a physical challenge but also an enriching experience of Maharashtra’s heritage.


              </p>
            </div>
            <div>
              <img 
                src="https://static2.tripoto.com/media/filter/tst/img/2030574/TripDocument/1625984317_img_7993.jpg" 
                alt="Trek route map" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;