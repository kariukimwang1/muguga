import { ArrowRight, Users, TreePine, HandHeart } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building <span className="text-green-600">Stronger</span> Communities Together
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Muguga Impact is dedicated to creating positive change through environmental conservation, 
              elderly care, community development, and sustainable initiatives that benefit everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link 
                to="/get-involved"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Join Our Mission
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/explore-mission"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all"
              >
                Explore Our Mission
              </Link>
            </div>

            {/* Additional Action Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Link 
                to="/apply-now"
                className="bg-blue-600 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Apply Now
              </Link>
              <Link 
                to="/become-partner"
                className="bg-purple-600 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors text-center"
              >
                Become Partner
              </Link>
              <Link 
                to="/corporate-sponsorship"
                className="bg-orange-600 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors text-center"
              >
                Sponsorship
              </Link>
              <Link 
                to="/donate"
                className="bg-red-600 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition-colors text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <TreePine className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Environmental Care</h3>
                <p className="text-gray-600 text-sm">Protecting our environment for future generations</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <HandHeart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Elderly Support</h3>
                <p className="text-gray-600 text-sm">Caring for our community elders with dignity</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg -mt-4">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Unity</h3>
                <p className="text-gray-600 text-sm">Bringing neighbors together for common goals</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg mt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Much More</h3>
                <p className="text-gray-600 text-sm">Expanding our impact across all community needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
