import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn how you can get involved, 
            volunteer, or access our community services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-700">
              Muguga Community Center<br />
              Muguga, Kiambu County<br />
              Kenya
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-700">
              +254 700 123 456<br />
              +254 720 987 654<br />
              Available 9 AM - 6 PM
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
            <p className="text-gray-700">
              info@mugugaimpact.org<br />
              volunteer@mugugaimpact.org<br />
              Quick response guaranteed
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+254 700 000 000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>I want to volunteer</option>
                  <option>I need community services</option>
                  <option>I want to donate</option>
                  <option>General inquiry</option>
                  <option>Partnership opportunity</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us more about how we can help or how you'd like to get involved..."
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

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Monday - Friday</div>
                  <div className="text-gray-700">9:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Saturday</div>
                  <div className="text-gray-700">9:00 AM - 4:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-600" />
                <div>
                  <div className="font-semibold text-gray-900">Sunday</div>
                  <div className="text-gray-700">Closed (Emergency only)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Emergency Support</h4>
              <p className="text-gray-700 text-sm mb-3">
                For urgent community assistance or elderly care emergencies, we provide 24/7 support.
              </p>
              <div className="text-green-600 font-semibold">
                Emergency Hotline: +254 711 000 000
              </div>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Volunteer Opportunities</h4>
              <p className="text-gray-700 text-sm mb-3">
                Join our weekly community activities and make a direct impact in your neighborhood.
              </p>
              <button className="text-purple-600 font-semibold hover:underline">
                View Current Opportunities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
