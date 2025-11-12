import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  Award, 
  Building2, 
  DollarSign, 
  Star,
  Users,
  Calendar,
  Trophy,
  Globe,
  Camera,
  Megaphone,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react';

const sponsorshipPackages = [
  {
    id: 'platinum',
    title: 'Platinum Sponsor',
    amount: '$25,000+',
    duration: 'Annual',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-indigo-600',
    benefits: [
      'Title sponsorship of major events',
      'Logo on all marketing materials',
      'Dedicated social media campaigns',
      'Executive speaking opportunities',
      'VIP event access and networking',
      'Quarterly impact reports',
      'Employee volunteer programs',
      'Tax deduction certificates'
    ],
    includes: [
      '12 months brand visibility',
      '4 major event sponsorships',
      'Monthly newsletter features',
      'Website homepage placement',
      'Press release announcements'
    ]
  },
  {
    id: 'gold',
    title: 'Gold Sponsor',
    amount: '$15,000+',
    duration: 'Annual',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-500',
    gradientFrom: 'from-yellow-600',
    gradientTo: 'to-orange-600',
    benefits: [
      'Event co-sponsorship opportunities',
      'Logo on event materials',
      'Social media recognition',
      'Networking opportunities',
      'Bi-annual impact reports',
      'Employee engagement activities',
      'Community appreciation',
      'CSR documentation'
    ],
    includes: [
      '12 months brand visibility',
      '2-3 event sponsorships',
      'Quarterly newsletter mentions',
      'Website sponsor page listing',
      'Thank you certificates'
    ]
  },
  {
    id: 'silver',
    title: 'Silver Sponsor',
    amount: '$7,500+',
    duration: 'Annual',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-500',
    gradientFrom: 'from-gray-600',
    gradientTo: 'to-slate-600',
    benefits: [
      'Event sponsorship recognition',
      'Logo on select materials',
      'Social media mentions',
      'Annual impact report',
      'Volunteer opportunities',
      'Community recognition',
      'Networking access'
    ],
    includes: [
      '12 months recognition',
      '1-2 event sponsorships',
      'Bi-annual newsletter mentions',
      'Website acknowledgment',
      'Impact certificates'
    ]
  },
  {
    id: 'bronze',
    title: 'Bronze Sponsor',
    amount: '$3,000+',
    duration: 'Annual',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-500',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-red-600',
    benefits: [
      'Name recognition at events',
      'Social media acknowledgment',
      'Annual thank you certificate',
      'Community goodwill',
      'Tax benefits',
      'Impact updates'
    ],
    includes: [
      '12 months recognition',
      'Event acknowledgments',
      'Annual newsletter mention',
      'Website listing',
      'Appreciation certificate'
    ]
  }
];

const eventSponsorship = [
  {
    event: 'Annual Community Festival',
    date: 'September 2024',
    attendance: '2,000+ attendees',
    cost: '$15,000',
    benefits: 'Main stage naming, booth space, program ads',
    icon: '🎉'
  },
  {
    event: 'Environmental Clean-up Day',
    date: 'Monthly',
    attendance: '300+ volunteers',
    cost: '$2,500/month',
    benefits: 'T-shirt branding, supply sponsorship',
    icon: '🌱'
  },
  {
    event: 'Elderly Care Appreciation Gala',
    date: 'June 2024',
    attendance: '500+ guests',
    cost: '$8,000',
    benefits: 'Table sponsorship, program recognition',
    icon: '👴'
  },
  {
    event: 'Youth Leadership Summit',
    date: 'April 2024',
    attendance: '150+ youth',
    cost: '$5,000',
    benefits: 'Workshop sponsorship, scholarship naming',
    icon: '🎓'
  },
  {
    event: 'Health & Wellness Fair',
    date: 'Quarterly',
    attendance: '800+ community members',
    cost: '$3,000/quarter',
    benefits: 'Health screening sponsorship, booth',
    icon: '🏥'
  },
  {
    event: 'Community Garden Launch',
    date: 'March 2024',
    attendance: '400+ families',
    cost: '$4,000',
    benefits: 'Garden naming rights, signage',
    icon: '🌻'
  }
];

const sponsorBenefits = [
  {
    icon: TrendingUp,
    title: 'Brand Visibility',
    description: 'Increase brand awareness through community events and marketing materials.'
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Make a meaningful difference in the lives of Muguga residents.'
  },
  {
    icon: Shield,
    title: 'Tax Benefits',
    description: 'Receive tax deductions for charitable contributions and sponsorships.'
  },
  {
    icon: Users,
    title: 'Employee Engagement',
    description: 'Boost team morale through volunteer activities and community service.'
  },
  {
    icon: Globe,
    title: 'Corporate Responsibility',
    description: 'Enhance CSR profile and meet sustainability goals.'
  },
  {
    icon: Trophy,
    title: 'Recognition',
    description: 'Receive awards and recognition for community leadership.'
  }
];

export default function CorporateSponsorshipPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Corporate Sponsorship</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Partner with Muguga Impact through corporate sponsorship and showcase your commitment to community development while achieving your business goals.
          </p>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sponsor With Us?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Corporate sponsorship with Muguga Impact delivers measurable business value while creating positive community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from our flexible sponsorship levels designed to match your budget and marketing objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sponsorshipPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${pkg.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`${pkg.bgColor} px-4 py-2 rounded-full`}>
                    <span className={`${pkg.color} font-bold text-lg`}>{pkg.title}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{pkg.amount}</div>
                    <div className="text-sm text-gray-500">{pkg.duration}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Benefits:</h4>
                  <div className="space-y-2">
                    {pkg.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="space-y-1">
                    {pkg.includes.map((item, index) => (
                      <div key={index} className="text-gray-600 text-sm">• {item}</div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/apply-now"
                  className={`inline-flex items-center space-x-2 ${pkg.color} hover:underline font-semibold`}
                >
                  <span>Choose This Package</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Sponsorship Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Sponsorship Opportunities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Sponsor specific community events and gain targeted exposure to our engaged audience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {eventSponsorship.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{event.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h3>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-600">{event.cost}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{event.benefits}</p>
                <Link 
                  to="/apply-now"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:underline font-semibold"
                >
                  <span>Sponsor This Event</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Custom Sponsorship Options</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We can create tailored sponsorship packages that align with your specific marketing goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Camera className="h-8 w-8 text-green-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Media Sponsorship</h3>
              <p className="text-gray-600 text-sm">Sponsor our photography, videography, and content creation efforts for branded content opportunities.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-blue-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Program Naming</h3>
              <p className="text-gray-600 text-sm">Have a program or initiative named after your organization for long-term brand association.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Building2 className="h-8 w-8 text-purple-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facility Sponsorship</h3>
              <p className="text-gray-600 text-sm">Sponsor community facilities and buildings for permanent recognition and brand visibility.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Target className="h-8 w-8 text-orange-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Campaigns</h3>
              <p className="text-gray-600 text-sm">Sponsor specific campaigns that align with your brand values and target demographic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Sponsorship Impact Metrics</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            We provide detailed reporting on your sponsorship ROI and community impact.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Corporate Sponsors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="opacity-90">Brand Impressions/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="opacity-90">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="opacity-90">Sponsor Renewal Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Become a Sponsor</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Getting started is simple. Follow these steps to begin your sponsorship journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Choose Package</h3>
              <p className="text-gray-600 text-sm">Select a sponsorship package that fits your budget and goals.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600 text-sm">Complete our sponsorship application with your preferences.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Agreement</h3>
              <p className="text-gray-600 text-sm">We finalize the sponsorship agreement and timeline.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600 text-sm">Begin receiving benefits and making community impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of corporate sponsors and start making a difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply-now" className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Apply for Sponsorship
            </Link>
            <Link to="/contact" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
