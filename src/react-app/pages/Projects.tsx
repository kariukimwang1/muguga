import Layout from '@/react-app/components/Layout';
import { Link } from 'react-router';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Target,
  TreePine,
  HandHeart,
  Home,
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Award
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Green Muguga Initiative",
    description: "A comprehensive environmental program focusing on tree planting, waste management, and creating sustainable green spaces throughout the community.",
    category: "Environmental",
    status: "Ongoing",
    location: "Muguga Community Center",
    startDate: "January 2024",
    participants: 120,
    icon: TreePine,
    color: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
    achievements: ["500+ trees planted", "15 waste collection points", "80% reduction in litter"],
    nextMilestone: "Community garden completion by March 2024"
  },
  {
    id: 2,
    title: "Elderly Care Network",
    description: "Building a comprehensive support system for elderly community members through regular visits, health monitoring, and social activities.",
    category: "Social Care",
    status: "Active",
    location: "Various Locations",
    startDate: "March 2023",
    participants: 85,
    icon: HandHeart,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-500",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500",
    achievements: ["150+ elderly residents supported", "Daily wellness checks", "Monthly social gatherings"],
    nextMilestone: "Health clinic partnership by February 2024"
  },
  {
    id: 3,
    title: "Youth Leadership Academy",
    description: "Empowering young people through leadership training, mentorship programs, and community service opportunities.",
    category: "Education",
    status: "Expanding",
    location: "Muguga Youth Center",
    startDate: "September 2023",
    participants: 60,
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-500",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500",
    achievements: ["40 youth leaders trained", "12 community projects led", "3 scholarship recipients"],
    nextMilestone: "Regional youth summit hosting in April 2024"
  },
  {
    id: 4,
    title: "Affordable Housing Initiative",
    description: "Improving housing conditions through home repairs, construction assistance, and housing counseling services for families in need.",
    category: "Housing",
    status: "Planning",
    location: "Target Communities",
    startDate: "May 2024",
    participants: 25,
    icon: Home,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500",
    achievements: ["Site assessments completed", "Partnership agreements signed", "Funding 75% secured"],
    nextMilestone: "First home renovation begins May 2024"
  },
  {
    id: 5,
    title: "Digital Literacy Program",
    description: "Bridging the digital divide by providing computer training, internet access, and digital skills education for all age groups.",
    category: "Technology",
    status: "Ongoing",
    location: "Community Computer Lab",
    startDate: "June 2023",
    participants: 95,
    icon: GraduationCap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-500",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
    achievements: ["80+ adults trained", "15 computers donated", "WiFi access established"],
    nextMilestone: "Mobile computer lab launch in March 2024"
  },
  {
    id: 6,
    title: "Community Health Network",
    description: "Improving health outcomes through health education, preventive care programs, and connecting residents to healthcare resources.",
    category: "Healthcare",
    status: "Active",
    location: "Health Centers",
    startDate: "August 2023",
    participants: 200,
    icon: HandHeart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-500",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
    achievements: ["300+ health screenings", "Weekly wellness workshops", "Mental health support groups"],
    nextMilestone: "Mobile health clinic partnership by April 2024"
  }
];

const upcomingProjects = [
  {
    title: "Solar Energy Initiative",
    description: "Installing solar panels in community buildings to reduce energy costs and promote renewable energy.",
    launchDate: "July 2024",
    category: "Environmental"
  },
  {
    title: "Community Garden Network",
    description: "Creating shared garden spaces for food security and community bonding.",
    launchDate: "April 2024",
    category: "Food Security"
  },
  {
    title: "Skills Training Center",
    description: "Establishing a vocational training center for marketable skills development.",
    launchDate: "September 2024",
    category: "Education"
  }
];

export default function ProjectsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Community Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover the transformative initiatives that are making a real difference in the Muguga community
          </p>
        </div>
      </section>

      {/* Project Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">680</div>
              <div className="text-gray-600">Community Members Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.3M</div>
              <div className="text-gray-600">Total Impact Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Active Projects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These ongoing initiatives are currently making a positive impact in our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={project.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 ${project.borderColor}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center space-x-2 ${project.bgColor} px-3 py-1 rounded-full`}>
                        <IconComponent className={`h-4 w-4 ${project.color}`} />
                        <span className={`text-sm font-medium ${project.color}`}>{project.category}</span>
                      </div>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{project.startDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{project.participants} participants</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <div className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-500" />
                        Next Milestone:
                      </h4>
                      <p className="text-gray-600 text-sm">{project.nextMilestone}</p>
                    </div>

                    <Link 
                      to="/get-involved"
                      className={`inline-flex items-center space-x-2 ${project.color} hover:underline font-semibold`}
                    >
                      <span>Join This Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Projects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Exciting new initiatives we're planning to launch in the coming months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-300 hover:border-green-500 transition-colors">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.launchDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Measuring Our Impact</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Our projects are carefully monitored and evaluated to ensure they create lasting positive change.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-90">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150</div>
              <div className="opacity-90">Elderly Residents Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">80</div>
              <div className="opacity-90">Youth Leaders Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Projects</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of the positive change happening in Muguga. Every contribution, big or small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Volunteer with Us
            </Link>
            <Link to="/donate" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Support Our Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
