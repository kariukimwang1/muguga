import Layout from '@/react-app/components/Layout';
import { useState } from 'react';
import { 
  User, 
  FileText, 
  CheckCircle, 
  Clock,
  Phone,
  Mail,
  Heart,
  ArrowRight,
  Info
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'environmental',
    title: 'Environmental Programs',
    description: 'Clean-up drives, tree planting, waste management',
    icon: '🌱'
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care Services',
    description: 'Companionship, health checks, daily assistance',
    icon: '👴'
  },
  {
    id: 'youth-programs',
    title: 'Youth Development',
    description: 'Mentorship, education, leadership training',
    icon: '🎓'
  },
  {
    id: 'housing-support',
    title: 'Housing Support',
    description: 'Home repairs, housing counseling, assistance',
    icon: '🏠'
  },
  {
    id: 'health-services',
    title: 'Health & Wellness',
    description: 'Health screenings, wellness workshops',
    icon: '🏥'
  },
  {
    id: 'education',
    title: 'Educational Programs',
    description: 'Literacy classes, computer training',
    icon: '📚'
  }
];

const applicationTypes = [
  {
    id: 'volunteer',
    title: 'Volunteer Application',
    description: 'Join our team of dedicated community volunteers',
    icon: Heart,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 'services',
    title: 'Service Request',
    description: 'Apply to receive our community support services',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'partnership',
    title: 'Partnership Proposal',
    description: 'Propose a collaboration or partnership opportunity',
    icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

// Define proper types for our form data
interface FormData {
  applicationType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  emergencyContact: string;
  emergencyPhone: string;
  servicesNeeded: string[]; // Changed from never[] to string[]
  availability: string;
  experience: string;
  motivation: string;
  references: string;
  additionalInfo: string;
}

export default function ApplyNowPage() {
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState<FormData>({
    applicationType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    emergencyContact: '',
    emergencyPhone: '',
    servicesNeeded: [],
    availability: '',
    experience: '',
    motivation: '',
    references: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData({
      ...formData,
      servicesNeeded: formData.servicesNeeded.includes(serviceId)
        ? formData.servicesNeeded.filter(id => id !== serviceId)
        : [...formData.servicesNeeded, serviceId]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Start your journey with Muguga Impact. Whether you want to volunteer, receive services, or partner with us, we're here to help.
          </p>
        </div>
      </section>

      {/* Application Type Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Application Type</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Select the type of application that best describes how you'd like to get involved with our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {applicationTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={type.id}
                  className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedType === type.id 
                      ? 'border-green-500 bg-green-50 shadow-lg' 
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                  }`}
                  onClick={() => {
                    setSelectedType(type.id);
                    setFormData({...formData, applicationType: type.id});
                  }}
                >
                  <div className={`${type.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${type.color} mx-auto`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{type.title}</h3>
                  <p className="text-gray-600 text-center">{type.description}</p>
                  {selectedType === type.id && (
                    <div className="mt-4 flex justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedType && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-8">
                  <FileText className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {applicationTypes.find(t => t.id === selectedType)?.title} Form
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <User className="h-5 w-5 mr-2 text-blue-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input 
                          type="text" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                        <input 
                          type="date" 
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                        <input 
                          type="text" 
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Name and relationship"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services/Programs of Interest */}
                  {(selectedType === 'services' || selectedType === 'volunteer') && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-green-600" />
                        {selectedType === 'services' ? 'Services Needed' : 'Areas of Interest'}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {serviceCategories.map((service) => (
                          <label key={service.id} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input 
                              type="checkbox"
                              checked={formData.servicesNeeded.includes(service.id)}
                              onChange={() => handleServiceChange(service.id)}
                              className="text-green-600 focus:ring-green-500"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xl">{service.icon}</span>
                                <span className="font-medium text-gray-900">{service.title}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-purple-600" />
                      Additional Information
                    </h3>
                    <div className="space-y-6">
                      {selectedType === 'volunteer' && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                            <textarea 
                              name="availability"
                              value={formData.availability}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="Please describe your availability (days, times, frequency)"
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                            <textarea 
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="Describe any relevant experience or skills"
                            ></textarea>
                          </div>
                        </>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {selectedType === 'volunteer' ? 'Why do you want to volunteer?' : 'How can we help you?'}
                        </label>
                        <textarea 
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder={selectedType === 'volunteer' 
                            ? "Tell us about your motivation to volunteer with Muguga Impact"
                            : "Please explain your situation and how our services could help"
                          }
                        ></textarea>
                      </div>

                      {selectedType === 'volunteer' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">References (Optional)</label>
                          <textarea 
                            name="references"
                            value={formData.references}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Provide names and contact information for 2 references"
                          ></textarea>
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                        <textarea 
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Any additional information you'd like to share"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="border-t border-gray-200 pt-8">
                    <button 
                      type="submit" 
                      className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Here's what you can expect after submitting your application.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Review</h3>
              <p className="text-gray-600">We review your application within 2-3 business days.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Contact</h3>
              <p className="text-gray-600">Our team contacts you to discuss next steps and answer questions.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meeting/Interview</h3>
              <p className="text-gray-600">We schedule a meeting to better understand your needs or interests.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Started</h3>
              <p className="text-gray-600">Begin your journey with training, orientation, or service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Questions About Your Application?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to help guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@mugugaimpact.org</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}