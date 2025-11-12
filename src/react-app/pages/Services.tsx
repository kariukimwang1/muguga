import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  TreePine, 
  HandHeart, 
  Users, 
  GraduationCap, 
  Home, 
  Droplets,
  Recycle,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react';

const services = [
  {
    icon: TreePine,
    title: "Environmental Cleanliness",
    description: "Regular community clean-up drives, tree planting initiatives, and waste management programs to keep our neighborhoods pristine.",
    features: ["Weekly clean-up drives", "Tree planting campaigns", "Waste sorting education", "Green space maintenance"],
    color: "text-green-600",
    bgColor: "bg-green-100",
    gradientFrom: "from-green-600",
    gradientTo: "to-emerald-600"
  },
  {
    icon: HandHeart,
    title: "Elderly Care Support",
    description: "Comprehensive care services for our senior community members including health checks, companionship, and assistance with daily activities.",
    features: ["Daily wellness checks", "Companionship programs", "Medical assistance", "Meal delivery services"],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Organizing neighborhood events, skill-building workshops, and collaborative projects that strengthen community bonds.",
    features: ["Monthly community events", "Skills workshops", "Leadership training", "Conflict resolution"],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600"
  },
  {
    icon: GraduationCap,
    title: "Educational Programs",
    description: "Literacy programs, vocational training, and educational workshops to empower community members with valuable skills.",
    features: ["Adult literacy classes", "Computer training", "Financial literacy", "Vocational skills"],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600"
  },
  {
    icon: Home,
    title: "Housing Support",
    description: "Assisting families with housing improvements, repairs, and connecting them with affordable housing resources.",
    features: ["Home repairs", "Housing counseling", "Rental assistance", "Construction support"],
    color: "text-red-600",
    bgColor: "bg-red-100",
    gradientFrom: "from-red-600",
    gradientTo: "to-pink-600"
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Ensuring access to clean water and proper sanitation facilities for all community members.",
    features: ["Water quality testing", "Well maintenance", "Sanitation education", "Hygiene programs"],
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    gradientFrom: "from-cyan-600",
    gradientTo: "to-blue-600"
  },
  {
    icon: Recycle,
    title: "Recycling Initiatives",
    description: "Promoting sustainable practices through recycling programs and environmental awareness campaigns.",
    features: ["Recycling drives", "Upcycling workshops", "Composting programs", "Environmental education"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    gradientFrom: "from-emerald-600",
    gradientTo: "to-green-600"
  },
  {
    icon: HeartHandshake,
    title: "Youth Mentorship",
    description: "Providing guidance, mentorship, and opportunities for young people to develop leadership skills and pursue their goals.",
    features: ["Mentorship matching", "Leadership camps", "Career guidance", "Scholarship programs"],
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    gradientFrom: "from-pink-600",
    gradientTo: "to-purple-600"
  },
  {
    icon: BookOpen,
    title: "Health Awareness",
    description: "Health education programs, wellness workshops, and connecting community members with healthcare resources.",
    features: ["Health screenings", "Wellness workshops", "Mental health support", "Healthcare navigation"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-purple-600"
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Community Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive support across multiple areas to create lasting positive impact in the Muguga community
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our diverse range of services addresses the core needs of our community, 
              from environmental sustainability to human development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className={`inline-flex p-4 rounded-xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${service.color}`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/apply-now"
                    className={`inline-flex items-center space-x-2 ${service.color} hover:underline font-semibold group-hover:translate-x-2 transition-transform`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Services Work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our streamlined process ensures you get the support you need quickly and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">Reach out through our contact form, phone, or visit our office to discuss your needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Our team conducts a thorough assessment to understand your specific situation and needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Development</h3>
              <p className="text-gray-600">We create a customized service plan tailored to your unique circumstances and goals.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Delivery</h3>
              <p className="text-gray-600">Our experienced team implements the plan with ongoing support and regular check-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            For urgent community assistance or elderly care emergencies, our dedicated team is available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254711000000" className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Emergency Hotline: +254 711 000 000
            </a>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Contact for Non-Emergency
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step towards accessing our community services and improving your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply-now" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Apply for Services
            </Link>
            <Link to="/contact" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
