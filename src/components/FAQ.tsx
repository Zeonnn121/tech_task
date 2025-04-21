import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "What is the difficulty level of the trek?",
    answer: "The Kothaligad (Peth Fort) trek is generally considered to be of easy to moderate difficulty, making it suitable for beginners and those with average fitness levels"
  },
  {
    question: "Do I need prior trekking experience?",
    answer: "No prior trekking experience is required. Our experienced trek leaders will guide you throughout the journey. However, basic fitness is recommended - the ability to walk continuously for 3-4 hours would be helpful preparation."
  },
  {
    question: "What should I wear for the trek?",
    answer: "Wear comfortable athletic clothes suitable for the weather. Most importantly, wear proper trekking shoes or sports shoes with good grip. Avoid new shoes to prevent blisters. A cap/hat for sun protection is recommended. Carry a light jacket in case of rain or wind."
  },
  {
    question: "What should I pack in my backpack?",
    answer: "Essential items include: 2 liters of water, personal medications if any, sunscreen, personal ID, some cash, energy snacks like nuts or chocolate, a small first aid kit if possible, a light towel, and a camera if you wish to capture memories. Keep your backpack as light as possible."
  },
  {
    question: "Is food provided during the trek?",
    answer: "Yes, we provide a light breakfast, packed lunch, and evening refreshments. We also supply energy snacks at rest points during the trek. However, you're welcome to bring your own snacks if you have specific dietary preferences."
  },
  {
    question: "Are there washroom facilities available?",
    answer: "Basic washroom facilities are available at the starting point and at the fort complex. During the trek, natural facilities will need to be used, with appropriate consideration for environmental impact."
  },
  {
    question: "What happens if it rains?",
    answer: "The trek will proceed in light rain - in fact, the Western Ghats are particularly beautiful in misty, damp conditions. We provide raincoats in case of unexpected showers. However, in case of severe weather warnings or heavy rainfall that compromises safety, the trek may be rescheduled."
  },
  {
    question: "What safety measures are in place?",
    answer: "Your safety is our priority. We maintain a 1:10 ratio of experienced trek leaders to participants. All leaders are trained in first aid and emergency procedures. We carry first aid kits and have a designated safety officer. The route is pre-checked before the trek, and we maintain contact with local authorities."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers to the most common queries about Footslog
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-green-600 flex-shrink-0" />
                )}
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Contact us directly!
          </p>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-8 rounded-lg inline-block transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;