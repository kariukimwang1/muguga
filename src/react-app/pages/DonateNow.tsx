import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { useState } from 'react';
import { 
  Heart, 
  DollarSign, 
  Users,
  CreditCard,
  Smartphone,
  Gift,
  Calendar,
  Shield,
  CheckCircle,
  Star,
  TreePine,
  HandHeart,
  GraduationCap,
  Home,
  Target,
  Award,
  Repeat,
  Clock
} from 'lucide-react';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const donationImpacts = [
  {
    amount: 25,
    impact: 'Provides school supplies for 2 children',
    icon: '📚'
  },
  {
    amount: 50,
    impact: 'Feeds an elderly person for one month',
    icon: '🍽️'
  },
  {
    amount: 100,
    impact: 'Plants and maintains 10 trees',
    icon: '🌳'
  },
  {
    amount: 250,
    impact: 'Provides health screening for 15 people',
    icon: '🏥'
  },
  {
    amount: 500,
    impact: 'Repairs a home for a family in need',
    icon: '🏠'
  },
  {
    amount: 1000,
    impact: 'Funds a month of elderly care program',
    icon: '❤️'
  }
];

const programFunding = [
  {
    title: 'Environmental Conservation',
    description: 'Support tree planting, clean-up drives, and environmental education programs.',
    monthlyNeed: '$2,500',
    currentFunding: 75,
    icon: TreePine,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    examples: ['Tree seedlings and planting tools', 'Clean-up supplies and equipment', 'Environmental education materials']
  },
  {
    title: 'Elderly Care Services',
    description: 'Fund daily care visits, health monitoring, and companionship programs for seniors.',
    monthlyNeed: '$3,200',
    currentFunding: 65,
    icon: HandHeart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    examples: ['Home care visits', 'Medical supplies and equipment', 'Social activities and events']
  },
  {
    title: 'Education & Skills Training',
    description: 'Support literacy programs, vocational training, and youth development initiatives.',
    monthlyNeed: '$1,800',
    currentFunding: 80,
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    examples: ['Learning materials and textbooks', 'Computer and internet access', 'Training workshop costs']
  },
  {
    title: 'Housing & Infrastructure',
    description: 'Help improve homes and build community facilities for better living conditions.',
    monthlyNeed: '$4,000',
    currentFunding: 45,
    icon: Home,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    examples: ['Building materials and tools', 'Skilled labor costs', 'Facility maintenance']
  }
];

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    description: 'Send money directly via mobile money',
    number: '+254 700 123 456',
    instructions: 'Send to this number with your name as reference',
    icon: Smartphone,
    color: 'text-green-600'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    description: 'Transfer directly to our bank account',
    details: 'Equity Bank - Account: 1234567890',
    instructions: 'Use your email as reference',
    icon: CreditCard,
    color: 'text-blue-600'
  },
  {
    id: 'online',
    name: 'Online Payment',
    description: 'Pay securely with card or digital wallet',
    details: 'Secure payment processing',
    instructions: 'Click donate button to process payment',
    icon: Shield,
    color: 'text-purple-600'
  }
];

export default function DonateNowPage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedProgram, setSelectedProgram] = useState<string>('general');

  const getCurrentImpact = (amount: number) => {
    const impact = donationImpacts.find(d => d.amount <= amount);
    return impact || donationImpacts[donationImpacts.length - 1];
  };

  const effectiveAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;
  const currentImpact = getCurrentImpact(effectiveAmount);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Donate to Muguga Impact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Your contribution directly funds programs that transform lives and strengthen our community. Every donation makes a real difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-8">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
                </div>

                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'one-time'
                          ? 'border-green-500 bg-green-50 text-green-600'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setDonationType('one-time')}
                    >
                      <Gift className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-medium">One-time</div>
                      <div className="text-sm text-gray-600">Single donation</div>
                    </button>
                    <button
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'monthly'
                          ? 'border-green-500 bg-green-50 text-green-600'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setDonationType('monthly')}
                    >
                      <Repeat className="h-6 w-6 mx-auto mb-2" />
                      <div className="font-medium">Monthly</div>
                      <div className="text-sm text-gray-600">Recurring donation</div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Select Amount {donationType === 'monthly' && '(Monthly)'}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedAmount === amount && !customAmount
                            ? 'border-green-500 bg-green-50 text-green-600'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Specific Program (Optional)</h3>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="general">General Fund - Where most needed</option>
                    <option value="environment">Environmental Conservation</option>
                    <option value="elderly">Elderly Care Services</option>
                    <option value="education">Education & Skills Training</option>
                    <option value="housing">Housing & Infrastructure</option>
                    <option value="emergency">Emergency Relief Fund</option>
                  </select>
                </div>

                {/* Donate Button */}
                <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>
                    Donate ${effectiveAmount} {donationType === 'monthly' && 'Monthly'}
                  </span>
                </button>

                <div className="mt-4 text-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Secure payment processing. Tax-deductible receipt provided.
                </div>
              </div>

              {/* Impact Information */}
              <div className="space-y-8">
                {/* Your Impact */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Your Impact</h3>
                  </div>
                  {effectiveAmount > 0 ? (
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ${effectiveAmount}{donationType === 'monthly' && '/month'}
                      </div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">{currentImpact.icon}</span>
                        <span className="text-gray-700">{currentImpact.impact}</span>
                      </div>
                      {donationType === 'monthly' && (
                        <div className="bg-white p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Annual Impact:</div>
                          <div className="font-bold text-gray-900">
                            ${effectiveAmount * 12} - Sustainable long-term support
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-600">Select an amount to see your impact</p>
                  )}
                </div>

                {/* Why Donate */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">100% of donations go directly to programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Transparent reporting on fund usage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Local community-driven impact</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Tax-deductible contribution</span>
                    </div>
                  </div>
                </div>

                {/* Donation Security */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Secure Donations</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Your donation is processed securely through encrypted payment systems. 
                    We never store your payment information, and all transactions are protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Funding Needs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Program Funding</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how close we are to meeting our monthly funding goals for each program area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programFunding.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${program.bgColor} p-3 rounded-xl`}>
                      <IconComponent className={`h-6 w-6 ${program.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <div className="text-lg font-semibold text-gray-600">{program.monthlyNeed}/month</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{program.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Funding Progress</span>
                      <span>{program.currentFunding}% funded</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${program.color === 'text-green-600' ? 'from-green-500 to-emerald-500' :
                          program.color === 'text-blue-600' ? 'from-blue-500 to-cyan-500' :
                          program.color === 'text-purple-600' ? 'from-purple-500 to-pink-500' :
                          'from-orange-500 to-red-500'}`}
                        style={{ width: `${program.currentFunding}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Funds Support:</h4>
                    <div className="space-y-2">
                      {program.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full ${program.color === 'text-green-600' ? 'bg-green-600 hover:bg-green-700' :
                    program.color === 'text-blue-600' ? 'bg-blue-600 hover:bg-blue-700' :
                    program.color === 'text-purple-600' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-orange-600 hover:bg-orange-700'} text-white py-3 rounded-lg font-semibold transition-colors`}>
                    Support This Program
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment Methods</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from multiple secure payment options that work best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div key={method.id} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg text-center">
                  <div className="bg-gray-50 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <IconComponent className={`h-8 w-8 ${method.color} mx-auto`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                  <p className="text-gray-700 mb-4">{method.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="font-medium text-gray-900">{method.details || method.number}</div>
                    <div className="text-sm text-gray-600">{method.instructions}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Donor Appreciation</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            We deeply value our donors and recognize their contributions through various appreciation programs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-xl font-bold mb-2">Recognition</div>
              <div className="opacity-90 text-sm">Annual donor appreciation events and certificates</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-xl font-bold mb-2">Updates</div>
              <div className="opacity-90 text-sm">Regular impact reports and program updates</div>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-xl font-bold mb-2">Community</div>
              <div className="opacity-90 text-sm">Exclusive donor community and volunteer opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Support</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Beyond financial donations, there are many ways to support our mission and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600 mx-auto mt-1" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Volunteer Time</h3>
              <p className="text-gray-600 text-sm mb-4">Donate your time and skills to directly support our programs.</p>
              <Link to="/get-involved" className="text-green-600 hover:underline font-semibold">
                Learn More
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Gift className="h-8 w-8 text-blue-600 mx-auto mt-1" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">In-Kind Donations</h3>
              <p className="text-gray-600 text-sm mb-4">Donate goods, services, or equipment needed for our programs.</p>
              <Link to="/contact" className="text-blue-600 hover:underline font-semibold">
                Contact Us
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mt-1" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 text-sm mb-4">Partner with us for larger scale community impact initiatives.</p>
              <Link to="/become-partner" className="text-purple-600 hover:underline font-semibold">
                Partner with Us
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-600 mx-auto mt-1" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Spread Awareness</h3>
              <p className="text-gray-600 text-sm mb-4">Share our mission and help us reach more potential supporters.</p>
              <Link to="/contact" className="text-orange-600 hover:underline font-semibold">
                Get Materials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
