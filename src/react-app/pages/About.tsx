import Layout from '@/react-app/components/Layout';
import { Target, Eye, Award, Users2, Heart, Star, Globe, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Muguga Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our story, mission, and the passionate community behind the positive change in Muguga
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Muguga Impact was born from a simple observation: when communities come together 
                with shared purpose and compassion, extraordinary transformation becomes possible. 
                Founded in 2020 by a group of dedicated community members, we started with a 
                vision to address the most pressing needs in our neighborhood.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What began as weekend clean-up drives has evolved into a comprehensive community 
                organization that touches every aspect of local life. From environmental stewardship 
                to elderly care, from youth development to sustainable housing initiatives, we've 
                grown because our community believed in the power of collective action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to serve over 500 community members with the help of 50+ 
                dedicated volunteers who share our commitment to creating lasting, positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2020</div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div className="bg-blue-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700">Lives Impacted</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700">Active Volunteers</div>
              </div>
              <div className="bg-orange-100 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-700">Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To empower the Muguga community through sustainable environmental practices, 
                compassionate elderly care, and inclusive development programs that benefit all residents.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-center">
                A thriving, sustainable community where every member feels valued, supported, 
                and empowered to contribute to collective prosperity and well-being.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
              <p className="text-gray-700 text-center">
                Compassion, Sustainability, Inclusivity, Integrity, and Community-first approach 
                guide everything we do and every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These fundamental principles guide our approach to community development and service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-12 w-12 text-white mx-auto mt-3" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion First</h3>
              <p className="text-gray-600">Every action we take is rooted in deep care for our community members' well-being.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-12 w-12 text-white mx-auto mt-3" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all our programs and community services.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-12 w-12 text-white mx-auto mt-3" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">Building solutions that create lasting positive impact for future generations.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-12 w-12 text-white mx-auto mt-3" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Transparent operations and honest communication build trust within our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <Users2 className="h-16 w-16 mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing community of changemakers and help us write the next chapter 
            of positive impact in Muguga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
