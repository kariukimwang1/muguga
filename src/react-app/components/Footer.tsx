import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Muguga Impact</h3>
                <p className="text-gray-400">Building stronger communities</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Creating sustainable positive change in the Muguga community through environmental 
              conservation, elderly care, youth development, and comprehensive community support programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-green-400 transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-green-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Environmental Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Elderly Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Youth Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Health Awareness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Housing Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">Muguga Community Center, Kiambu County</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">info@mugugaimpact.org</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Muguga Impact. All rights reserved. Made with ❤️ for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
