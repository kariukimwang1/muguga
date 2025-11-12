import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  Target, 
  Eye, 
  Heart, 
  Users,
  Globe,
  TreePine,
  HandHeart,
  GraduationCap,
  Home,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Shield,
  Compass,
  Clock,
  Map
} from 'lucide-react';

const missionPillars = [
  {
    icon: TreePine,
    title: 'Environmental Stewardship',
    description: 'Protecting and preserving our natural environment for future generations through sustainable practices and community education.',
    initiatives: [
      'Weekly community clean-up drives',
      'Tree planting and forest conservation',
      'Waste management and recycling programs',
      'Environmental education workshops',
      'Green energy adoption support'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    impact: '500+ trees planted, 80% waste reduction'
  },
  {
    icon: HandHeart,
    title: 'Community Care',
    description: 'Providing comprehensive support and care services to ensure no community member is left behind.',
    initiatives: [
      'Elderly care and companionship programs',
      'Health screenings and wellness support',
      'Emergency assistance programs',
      'Food security initiatives',
      'Mental health and counseling services'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    impact: '150+ elderly residents supported daily'
  },
  {
    icon: GraduationCap,
    title: 'Education & Development',
    description: 'Empowering individuals through education, skill development, and capacity building programs.',
    initiatives: [
      'Adult literacy and education programs',
      'Digital literacy and computer training',
      'Vocational skills development',
      'Youth leadership programs',
      'Scholarship and bursary support'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    impact: '200+ individuals trained in new skills'
  },
  {
    icon: Home,
    title: 'Housing & Infrastructure',
    description: 'Improving living conditions and community infrastructure to create safe, healthy environments.',
    initiatives: [
      'Home repair and improvement programs',
      'Housing counseling and support',
      'Water and sanitation projects',
      'Community facility development',
      'Infrastructure maintenance'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    impact: '75+ homes improved, 5 facilities built'
  }
];

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We lead with empathy and understanding, ensuring every community member feels valued and supported.',
    examples: ['Active listening to community needs', 'Culturally sensitive service delivery', 'Trauma-informed care approaches']
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and accountability in all our actions and decisions.',
    examples: ['Open financial reporting', 'Ethical decision-making processes', 'Regular community feedback sessions']
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of community and work together to achieve shared goals.',
    examples: ['Inclusive planning processes', 'Multi-stakeholder partnerships', 'Volunteer-driven initiatives']
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'We focus on long-term solutions that create lasting positive impact for future generations.',
    examples: ['Environmental conservation focus', 'Capacity building programs', 'Self-sustaining community initiatives']
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for the highest standards in service delivery and community impact.',
    examples: ['Continuous improvement practices', 'Evidence-based programming', 'Regular impact measurement']
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creative solutions and new approaches to address evolving community challenges.',
    examples: ['Technology integration', 'Pilot program development', 'Community-led innovation']
  }
];

const impactAreas = [
  {
    title: 'Lives Directly Impacted',
    value: '2,500+',
    description: 'Community members who have directly benefited from our programs and services.',
    icon: Users
  },
  {
    title: 'Families Supported',
    value: '800+',
    description: 'Families that have received comprehensive support through our various initiatives.',
    icon: Home
  },
  {
    title: 'Volunteers Engaged',
    value: '150+',
    description: 'Dedicated volunteers who contribute their time and skills to our mission.',
    icon: Heart
  },
  {
    title: 'Community Projects',
    value: '25+',
    description: 'Successful projects completed that have improved community infrastructure and services.',
    icon: Award
  }
];

const theoryOfChange = [
  {
    stage: 'Input',
    title: 'Resources & Partnerships',
    description: 'We mobilize financial resources, human capital, and strategic partnerships to fuel our initiatives.',
    elements: ['Funding and donations', 'Volunteer time and skills', 'Partner organizations', 'Community assets']
  },
  {
    stage: 'Activities',
    title: 'Program Implementation',
    description: 'We execute targeted programs across our four mission pillars with community participation.',
    elements: ['Direct service delivery', 'Capacity building workshops', 'Community mobilization', 'Advocacy efforts']
  },
  {
    stage: 'Outputs',
    title: 'Direct Results',
    description: 'Our activities produce measurable outputs that demonstrate program reach and effectiveness.',
    elements: ['Number of people served', 'Services delivered', 'Training sessions completed', 'Infrastructure built']
  },
  {
    stage: 'Outcomes',
    title: 'Community Changes',
    description: 'Our programs create positive changes in knowledge, attitudes, behaviors, and conditions.',
    elements: ['Improved health outcomes', 'Increased skills and knowledge', 'Stronger community bonds', 'Better living conditions']
  },
  {
    stage: 'Impact',
    title: 'Long-term Transformation',
    description: 'Sustained positive changes that improve quality of life and community resilience.',
    elements: ['Reduced poverty', 'Enhanced community capacity', 'Environmental sustainability', 'Social cohesion']
  }
];

export default function ExploreOurMissionPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover the driving force behind Muguga Impact - our comprehensive mission to transform communities through sustainable, collaborative action.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-12 rounded-3xl">
              <Target className="h-16 w-16 mx-auto mb-6 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To empower the Muguga community through sustainable environmental practices, compassionate care services, 
                educational advancement, and infrastructure development that creates lasting positive change for current 
                and future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-12 rounded-3xl">
              <Eye className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                A thriving, resilient, and sustainable Muguga community where every resident has access to opportunities, 
                support, and resources needed to lead a dignified life while contributing to collective prosperity and 
                environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Four Mission Pillars</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach addresses community needs through four interconnected pillars of impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`${pillar.bgColor} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${pillar.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-700 mb-6">{pillar.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives:</h4>
                    <div className="space-y-2">
                      {pillar.initiatives.map((initiative, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{initiative}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Current Impact:</h4>
                    <p className="text-green-600 font-medium text-sm">{pillar.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These fundamental principles guide our approach and ensure we remain true to our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{value.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">In Practice:</h4>
                    <ul className="space-y-1">
                      {value.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Theory of Change</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              How we create sustainable community transformation through our strategic approach.
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {theoryOfChange.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Circle for lg screens */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-green-500 rounded-full"></div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg mt-8 lg:mt-16">
                    <div className="text-center mb-4">
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 px-3 py-1 rounded-full text-sm font-medium text-green-600 mb-2">
                        {stage.stage}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{stage.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{stage.description}</p>
                    <ul className="space-y-1">
                      {stage.elements.map((element, idx) => (
                        <li key={idx} className="text-xs text-gray-600">• {element}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Compass className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Mission Impact by Numbers</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Measurable results demonstrate our commitment to creating real, lasting change in the Muguga community.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <div className="text-3xl font-bold mb-2">{area.value}</div>
                  <div className="font-medium mb-2">{area.title}</div>
                  <div className="text-sm opacity-80">{area.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Goals 2024-2027</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Clear, measurable objectives that guide our work toward greater community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
              <TreePine className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Excellence</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Plant 2,000 trees by 2027</li>
                <li>• Achieve 90% waste recycling rate</li>
                <li>• Install solar in 5 community buildings</li>
                <li>• Train 500 environmental advocates</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <HandHeart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Care & Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Support 300 elderly residents daily</li>
                <li>• Provide healthcare to 2,000 people</li>
                <li>• Establish 3 new care centers</li>
                <li>• Train 100 community health workers</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border-l-4 border-purple-500">
              <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Skills</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Train 1,000 people in new skills</li>
                <li>• Achieve 95% adult literacy rate</li>
                <li>• Graduate 200 youth leaders</li>
                <li>• Award 50 scholarships annually</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-500">
              <Home className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Improve 200 homes</li>
                <li>• Build 10 new community facilities</li>
                <li>• Install clean water for 5,000 people</li>
                <li>• Create 500 decent jobs</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl border-l-4 border-indigo-500">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Engagement</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Engage 300 active volunteers</li>
                <li>• Form 20 community groups</li>
                <li>• Host 100 community events</li>
                <li>• Achieve 80% resident participation</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl border-l-4 border-pink-500">
              <Globe className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Achieve financial self-sufficiency</li>
                <li>• Establish endowment fund</li>
                <li>• Develop 5 income-generating projects</li>
                <li>• Create community ownership model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Support Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              There are many ways you can contribute to achieving our mission and creating lasting community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">Contribute your time and skills to directly support our programs.</p>
              <Link to="/get-involved" className="text-green-600 hover:underline font-semibold">
                Get Involved →
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">Provide financial support to fund our programs and operations.</p>
              <Link to="/donate" className="text-blue-600 hover:underline font-semibold">
                Donate Now →
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner</h3>
              <p className="text-gray-600 mb-4">Collaborate with us as an organization or business partner.</p>
              <Link to="/become-partner" className="text-purple-600 hover:underline font-semibold">
                Become Partner →
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-600 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advocate</h3>
              <p className="text-gray-600 mb-4">Spread awareness and advocate for our mission in your networks.</p>
              <Link to="/contact" className="text-orange-600 hover:underline font-semibold">
                Learn How →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
