import { 
  TreePine, 
  HandHeart, 
  Users, 
  GraduationCap, 
  Home, 
  Droplets,
  Recycle,
  HeartHandshake,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: TreePine,
    title: "Environmental Cleanliness",
    description: "Regular community clean-up drives, tree planting initiatives, and waste management programs to keep our neighborhoods pristine.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: HandHeart,
    title: "Elderly Care Support",
    description: "Comprehensive care services for our senior community members including health checks, companionship, and assistance with daily activities.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Organizing neighborhood events, skill-building workshops, and collaborative projects that strengthen community bonds.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: GraduationCap,
    title: "Educational Programs",
    description: "Literacy programs, vocational training, and educational workshops to empower community members with valuable skills.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Home,
    title: "Housing Support",
    description: "Assisting families with housing improvements, repairs, and connecting them with affordable housing resources.",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Ensuring access to clean water and proper sanitation facilities for all community members.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100"
  },
  {
    icon: Recycle,
    title: "Recycling Initiatives",
    description: "Promoting sustainable practices through recycling programs and environmental awareness campaigns.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  },
  {
    icon: HeartHandshake,
    title: "Youth Mentorship",
    description: "Providing guidance, mentorship, and opportunities for young people to develop leadership skills and pursue their goals.",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: BookOpen,
    title: "Health Awareness",
    description: "Health education programs, wellness workshops, and connecting community members with healthcare resources.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Community Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive support across multiple areas to create lasting positive impact 
            in the Muguga community and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl ${service.bgColor} mb-6`}>
                  <IconComponent className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                <Link 
                  to="/services"
                  className={`mt-6 ${service.color} hover:underline font-semibold block`}
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/apply-now"
            className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Get Involved in Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
