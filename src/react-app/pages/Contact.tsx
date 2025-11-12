import Layout from '@/react-app/components/Layout';
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users, Globe } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Muguga Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're here to help, answer questions, and connect you with our community programs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-700">
                Muguga Community Center<br />
                123 Community Drive<br />
                Muguga, Kiambu County<br />
                Kenya
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-700">
                Main: +254 700 123 456<br />
                Volunteer: +254 720 987 654<br />
                Emergency: +254 711 000 000<br />
                Available 9 AM - 6 PM
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-700">
                info@mugugaimpact.org<br />
                volunteer@mugugaimpact.org<br />
                partnerships@mugugaimpact.org<br />
                Quick response guaranteed
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-gray-700">
                @MugugaImpact<br />
                Facebook, Twitter, Instagram<br />
                LinkedIn: Muguga Impact<br />
                Stay connected with updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can we help? *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="volunteer">I want to volunteer</option>
                    <option value="services">I need community services</option>
                    <option value="donate">I want to donate</option>
                    <option value="partnership">Partnership opportunity</option>
                    <option value="sponsorship">Corporate sponsorship</option>
                    <option value="general">General inquiry</option>
                    <option value="media">Media inquiry</option>
                    <option value="feedback">Feedback or suggestion</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us more about how we can help or how you'd like to get involved..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Hours and Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">Closed (Emergency only)</span>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-red-600" />
                  Emergency Support
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  For urgent community assistance or elderly care emergencies, we provide 24/7 support.
                </p>
                <div className="text-red-600 font-semibold text-lg">
                  Emergency Hotline: +254 711 000 000
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Quick Actions</h4>
                </div>
                <div className="space-y-3">
                  <a href="/apply-now" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="font-medium text-gray-900">Apply for Services</div>
                    <div className="text-sm text-gray-600">Get started with our community programs</div>
                  </a>
                  <a href="/get-involved" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="font-medium text-gray-900">Volunteer Opportunities</div>
                    <div className="text-sm text-gray-600">Find ways to help in the community</div>
                  </a>
                  <a href="/donate" className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="font-medium text-gray-900">Make a Donation</div>
                    <div className="text-sm text-gray-600">Support our mission financially</div>
                  </a>
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  <h4 className="font-bold text-gray-900">Community Meetings</h4>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Join our monthly community meetings to stay informed and get involved in decision-making.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Next Meeting:</span>
                    <span className="text-purple-600">1st Saturday of each month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Time:</span>
                    <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Location:</span>
                    <span className="text-gray-600">Community Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-700">
              We're located in the heart of Muguga, easily accessible by public transport and car.
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">
                Muguga Community Center, Kiambu County, Kenya
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mt-2" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Public Transport</h3>
              <p className="text-gray-600 text-sm">
                Accessible via Muguga matatu route. Alight at Community Center stop.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mt-2" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Parking Available</h3>
              <p className="text-gray-600 text-sm">
                Free parking available on-site for visitors and volunteers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600 mx-auto mt-2" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accessible Facility</h3>
              <p className="text-gray-600 text-sm">
                Our facility is fully accessible with ramps and accessible restrooms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
