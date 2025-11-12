import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  Users, 
  Heart, 
  Calendar, 
  Clock,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Target,
  Gift,
  Handshake
} from 'lucide-react';

const volunteerOpportunities = [
  {
    id: 1,
    title: "Environmental Clean-up Volunteer",
    category: "Environmental",
    commitment: "Weekend mornings",
    location: "Various Community Sites",
    description: "Join our weekly clean-up drives and help maintain the beauty of our community spaces.",
    requirements: ["Physical fitness for outdoor work", "Commitment to weekly participation", "Own transportation preferred"],
    benefits: ["Community impact", "Meet like-minded people", "Outdoor activity", "Skill development"],
    color: "text-green-600",
    bgColor: "bg-green-100",
    spots: 15
  },
  {
    id: 2,
    title: "Elderly Care Companion",
    category: "Social Care",
    commitment: "2-3 hours weekly",
    location: "Elderly Residents' Homes",
    description: "Provide companionship and assistance to elderly community members through regular visits.",
    requirements: ["Good communication skills", "Patience and empathy", "Background check required", "Training provided"],
    benefits: ["Meaningful relationships", "Personal fulfillment", "Training certificates", "Flexible schedule"],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    spots: 8
  },
  {
    id: 3,
    title: "Youth Mentor",
    category: "Education",
    commitment: "4 hours weekly",
    location: "Youth Center",
    description: "Guide and support young people in their personal and academic development journey.",
    requirements: ["High school diploma minimum", "Experience with youth", "Patient and encouraging", "6-month commitment"],
    benefits: ["Leadership development", "Impact young lives", "Mentor training", "Reference letters"],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    spots: 12
  },
  {
    id: 4,
    title: "Community Event Organizer",
    category: "Events",
    commitment: "10 hours monthly",
    location: "Community Center",
    description: "Help plan and execute community events, workshops, and fundraising activities.",
    requirements: ["Organizational skills", "Creative thinking", "Team collaboration", "Event experience preferred"],
    benefits: ["Event planning skills", "Network building", "Portfolio development", "Recognition"],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    spots: 6
  },
  {
    id: 5,
    title: "Digital Literacy Instructor",
    category: "Technology",
    commitment: "6 hours weekly",
    location: "Computer Lab",
    description: "Teach basic computer skills and digital literacy to community members of all ages.",
    requirements: ["Computer proficiency", "Teaching ability", "Patience with beginners", "Regular availability"],
    benefits: ["Teaching experience", "Skill sharing", "Technology access", "Community impact"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    spots: 4
  },
  {
    id: 6,
    title: "Health Education Ambassador",
    category: "Healthcare",
    commitment: "5 hours monthly",
    location: "Community Health Centers",
    description: "Promote health awareness and assist in community health programs and screenings.",
    requirements: ["Health background preferred", "Good communication", "Community trust", "Training participation"],
    benefits: ["Health education", "Community respect", "Certification", "Healthcare network"],
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    spots: 10
  }
];

const supportWays = [
  {
    icon: Gift,
    title: "Financial Donations",
    description: "Support our programs through one-time or recurring financial contributions.",
    action: "Donate Now",
    link: "/donate"
  },
  {
    icon: Handshake,
    title: "Corporate Partnership",
    description: "Partner with us as a business to create larger community impact.",
    action: "Become Partner",
    link: "/become-partner"
  },
  {
    icon: Star,
    title: "Sponsor Events",
    description: "Sponsor community events and get recognition for your support.",
    action: "Learn More",
    link: "/corporate-sponsorship"
  },
  {
    icon: Users,
    title: "Organize Fundraisers",
    description: "Host your own fundraising event to support our mission.",
    action: "Get Started",
    link: "/apply-now"
  }
];

export default function GetInvolvedPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Involved with Muguga Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Join our community of changemakers and help create lasting positive impact in Muguga
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find meaningful ways to contribute your time and skills to our community programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`${opportunity.bgColor} px-4 py-2 rounded-full`}>
                    <span className={`${opportunity.color} font-medium text-sm`}>{opportunity.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Available Spots</div>
                    <div className="text-lg font-bold text-gray-900">{opportunity.spots}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-700 mb-6">{opportunity.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{opportunity.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <div className="space-y-2">
                    {opportunity.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Gain:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.benefits.map((benefit, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/apply-now"
                  className={`inline-flex items-center space-x-2 ${opportunity.color} hover:underline font-semibold`}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Support</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Can't volunteer? There are many other ways you can support our mission and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportWays.map((way, index) => {
              const IconComponent = way.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                  <p className="text-gray-700 mb-6">{way.description}</p>
                  <Link 
                    to={way.link}
                    className="inline-flex items-center space-x-2 text-green-600 hover:underline font-semibold"
                  >
                    <span>{way.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our simple process makes it easy to begin your volunteering journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Role</h3>
              <p className="text-gray-600">Browse our volunteer opportunities and find one that matches your interests and availability.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">Complete our simple online application form with your details and preferences.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview & Training</h3>
              <p className="text-gray-600">Participate in a brief interview and complete any required training for your role.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Making Impact</h3>
              <p className="text-gray-600">Begin your volunteer journey and start making a positive difference in the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Recognition */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Volunteer Recognition</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            We celebrate and recognize the incredible contributions of our volunteers through various programs and awards.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Monthly</div>
              <div className="opacity-90">Volunteer Appreciation Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Annual</div>
              <div className="opacity-90">Volunteer Awards Ceremony</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Ongoing</div>
              <div className="opacity-90">Skill Development Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our volunteer coordinator is here to help you find the perfect opportunity to make a difference.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">volunteer@mugugaimpact.org</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply-now" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
                Apply to Volunteer
              </Link>
              <Link to="/contact" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors">
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
