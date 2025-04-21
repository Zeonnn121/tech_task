import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need more information? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Our team is happy to answer your questions about Footslog 2025. Fill out the form and we'll be in touch as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <a href="mailto:footslog@rotaractfrcrce.org" className="text-green-600 hover:underline">
                    footslog@rotaractfrcrce.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <a href="tel:+919876543210" className="text-green-600 hover:underline">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-gray-500">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <address className="not-italic text-gray-600">
                    Fr. Conceicao Rodrigues College of Engineering<br />
                    Father Agnel Ashram, Bandstand<br />
                    Bandra West, Mumbai - 400050
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/rotaract_crce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="text-gray-600 hover:text-green-600" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="text-gray-600 hover:text-green-600" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="text-gray-600 hover:text-green-600" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="contactSubject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="contactSubject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;