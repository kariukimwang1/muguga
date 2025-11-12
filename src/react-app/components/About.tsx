import { Target, Eye, Award, Users2 } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Muguga Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Muguga Impact was founded with a simple yet powerful vision: to create sustainable positive 
              change in our community through collaborative action and compassionate service. We believe 
              that when neighbors come together with a shared purpose, incredible transformation is possible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our organization focuses on addressing critical community needs through environmental 
              stewardship, elderly care, youth development, and comprehensive community support programs. 
              Every initiative we undertake is designed to create lasting impact and strengthen the 
              bonds that make our community resilient.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Community Members Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower the Muguga community through sustainable environmental practices, 
                    compassionate elderly care, and inclusive development programs that benefit all residents.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    A thriving, sustainable community where every member feels valued, supported, 
                    and empowered to contribute to collective prosperity and well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-700">
                    Compassion, Sustainability, Inclusivity, Integrity, and Community-first approach 
                    guide everything we do and every decision we make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <Users2 className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you want to volunteer, participate in programs, or simply stay connected, 
            there's a place for everyone in the Muguga Impact family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-involved"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link 
              to="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
