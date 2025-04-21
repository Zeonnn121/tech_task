import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { RegistrationFormData } from '../types';

const initialFormData: RegistrationFormData = {
  name: '',
  email: '',
  phone: '',
  age: '',
  experience: 'beginner',
  medicalConditions: '',
  emergencyContact: '',
  emergencyPhone: ''
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof RegistrationFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else {
      const age = parseInt(formData.age);
      if (isNaN(age) || age < 16 || age > 65) {
        newErrors.age = 'Age must be between 16 and 65';
      }
    }
    
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact name is required';
    
    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact number is required';
    } else if (!/^\d{10}$/.test(formData.emergencyPhone.replace(/\D/g, ''))) {
      newErrors.emergencyPhone = 'Emergency contact number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData(initialFormData);
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="register" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Register for Footslog 2025
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Secure your spot for an unforgettable adventure. Limited slots available!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-green-600 p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Trek Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Date: August 15, 2025</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Registration Fee: ₹899 per person</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span>All-inclusive package with transport, meals, and equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Professional trek leaders</span>
                </li>
              </ul>
              <p className="mt-6 text-sm opacity-90">
                * Payment details will be shared after registration confirmation.
              </p>
            </div>
            
            <div className="md:col-span-3 p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle size={64} className="text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for registering for Footslog 2025. Check your email for confirmation and payment details.
                  </p>
                  <p className="text-gray-600">
                    If you have any questions, feel free to contact us.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age * (16-65 years)
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="16"
                        max="65"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.age ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Trekking Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="beginner">Beginner (0-2 treks)</option>
                      <option value="intermediate">Intermediate (3-5 treks)</option>
                      <option value="experienced">Experienced (6+ treks)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                      Any Medical Conditions or Allergies?
                    </label>
                    <textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      rows={2}
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Please mention any medical conditions or allergies we should be aware of."
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.emergencyContact && <p className="mt-1 text-sm text-red-600">{errors.emergencyContact}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Emergency Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                          errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.emergencyPhone && <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone}</p>}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={20} className="mr-2" />
                          Register Now
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;