import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  Handshake, 
  Building, 
  Users, 
  Target,
  TrendingUp,
  Award,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const partnershipTypes = [
  {
    id: 'strategic',
    title: 'Strategic Partnership',
    description: 'Long-term collaboration on major community initiatives and programs.',
    benefits: [
      'Joint program development',
      'Shared resource allocation',
      'Co-branded marketing opportunities',
      'Board representation consideration',
      'Exclusive partnership recognition'
    ],
    commitment: 'Multi-year',
    investment: '$50,000+ annually',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500'
  },
  {
    id: 'program',
    title: 'Program Partnership',
    description: 'Support specific programs like education, healthcare, or environmental initiatives.',
    benefits: [
      'Program naming rights',
      'Direct community impact',
      'Regular progress reports',
      'Volunteer engagement opportunities',
      'CSR reporting support'
    ],
    commitment: '1-3 years',
    investment: '$15,000+ annually',
    icon: Heart,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-500'
  },
  {
    id: 'corporate',
    title: 'Corporate Sponsor',
    description: 'Support through financial contributions, in-kind donations, or employee volunteering.',
    benefits: [
      'Brand visibility at events',
      'Employee volunteering programs',
      'Tax benefits',
      'Corporate social responsibility',
      'Community goodwill'
    ],
    commitment: '6 months - 1 year',
    investment: '$5,000+ annually',
    icon: Building,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500'
  },
  {
    id: 'service',
    title: 'Service Partnership',
    description: 'Provide professional services, expertise, or resources to support our operations.',
    benefits: [
      'Skill-based volunteering',
      'Professional networking',
      'Portfolio development',
      'Team building opportunities',
      'Knowledge sharing'
    ],
    commitment: 'Project-based',
    investment: 'In-kind services',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-500'
  }
];

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: 'Enhanced Brand Reputation',
    description: 'Build positive brand association through meaningful community impact and social responsibility.'
  },
  {
    icon: Users,
    title: 'Employee Engagement',
    description: 'Boost employee morale and retention through purpose-driven volunteering and team building.'
  },
  {
    icon: Globe,
    title: 'Community Connection',
    description: 'Strengthen ties with local community and build lasting relationships with residents.'
  },
  {
    icon: Award,
    title: 'Recognition & Awards',
    description: 'Gain recognition for corporate citizenship and qualify for sustainability awards.'
  },
  {
    icon: DollarSign,
    title: 'Tax Benefits',
    description: 'Receive tax deductions for charitable contributions and community investments.'
  },
  {
    icon: Star,
    title: 'Marketing Opportunities',
    description: 'Access co-marketing opportunities and positive PR through community success stories.'
  }
];

const currentPartners = [
  {
    name: 'Green Energy Solutions Ltd',
    type: 'Strategic Partner',
    contribution: 'Solar panel installations for community center',
    since: '2023',
    logo: '🔋'
  },
  {
    name: 'Nairobi Medical Center',
    type: 'Program Partner',
    contribution: 'Monthly health screenings and medical support',
    since: '2023',
    logo: '🏥'
  },
  {
    name: 'Tech4Good Kenya',
    type: 'Service Partner',
    contribution: 'Digital literacy training and computer donations',
    since: '2022',
    logo: '💻'
  },
  {
    name: 'Local Construction Co.',
    type: 'Corporate Sponsor',
    contribution: 'Housing repair materials and skilled labor',
    since: '2024',
    logo: '🏗️'
  }
];

export default function BecomePartnerPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become a Partner</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Join us in creating sustainable, positive change in the Muguga community through strategic partnerships and collaborative impact.
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Muguga Impact?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Partnering with us creates mutual value - driving community impact while achieving your corporate social responsibility goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from various partnership levels that align with your organization's capacity and commitment goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={type.id}
                  className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${type.borderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${type.bgColor} p-4 rounded-xl`}>
                      <IconComponent className={`h-8 w-8 ${type.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {type.commitment}
                      </div>
                      <div className="text-lg font-bold text-gray-900 mt-1">{type.investment}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-700 mb-6">{type.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/apply-now"
                    className={`inline-flex items-center space-x-2 ${type.color} hover:underline font-semibold`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Current Partners</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the organizations already making a difference with us in the Muguga community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        Since {partner.since}
                      </span>
                    </div>
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {partner.type}
                    </div>
                    <p className="text-gray-700">{partner.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our structured approach ensures successful partnerships that create lasting community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Initial Discussion</h3>
              <p className="text-gray-600 text-sm">We meet to understand your goals and explore partnership opportunities.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Needs Assessment</h3>
              <p className="text-gray-600 text-sm">Together, we identify community needs that align with your capabilities.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proposal Development</h3>
              <p className="text-gray-600 text-sm">We create a detailed partnership proposal with clear objectives and outcomes.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Agreement Signing</h3>
              <p className="text-gray-600 text-sm">Formalize the partnership with a comprehensive agreement and timeline.</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm">Launch the partnership with regular monitoring and impact measurement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Partnership Impact</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Our partnerships have created measurable impact across multiple community areas.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="opacity-90">Active Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2.3M</div>
              <div className="opacity-90">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8,500</div>
              <div className="opacity-90">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="opacity-90">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Next Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss how we can work together to create lasting positive impact in the Muguga community.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">+254 720 987 654</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">partnerships@mugugaimpact.org</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply-now" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Submit Partnership Proposal
              </Link>
              <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule a Meeting
              </Link>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Monthly Partner Meetings</h3>
              <p className="text-gray-700 text-sm">
                Join our monthly partner meetings every first Friday to stay connected with other partners 
                and get updates on community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
