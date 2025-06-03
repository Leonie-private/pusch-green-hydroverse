
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Maria Schneider",
      role: "Gründerin & Hydroponik-Expertin",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      description: "15 Jahre Erfahrung in nachhaltiger Landwirtschaft und Hydroponik-Systemen.",
      linkedin: "#",
      email: "maria@pusch-green.de"
    },
    {
      name: "Ing. Thomas Weber",
      role: "3D-Technologie & Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Spezialist für 3D-Druck und innovative Anbausystem-Designs.",
      linkedin: "#",
      email: "thomas@pusch-green.de"
    },
    {
      name: "Elena Rodriguez",
      role: "IoT & Automatisierung",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Expertin für IoT-Sensoren und intelligente Überwachungssysteme.",
      linkedin: "#",
      email: "elena@pusch-green.de"
    },
    {
      name: "Dr. Marcus Klein",
      role: "Aquaponik & Ökosysteme",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Biologe mit Fokus auf nachhaltige Aquaponik-Kreisläufe.",
      linkedin: "#",
      email: "marcus@pusch-green.de"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-pusch-green-50 to-nature-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pusch-green-800 mb-6">
            Unser Expertenteam
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance">
            Lernen Sie die Köpfe hinter Pusch-Green kennen - ein interdisziplinäres Team 
            aus Experten für nachhaltige Landwirtschaft, Technologie und Innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pusch-green-900/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pusch-green-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-pusch-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex gap-3">
                  <a 
                    href={member.linkedin}
                    className="p-2 bg-pusch-green-100 text-pusch-green-600 rounded-full hover:bg-pusch-green-600 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-pusch-green-100 text-pusch-green-600 rounded-full hover:bg-pusch-green-600 hover:text-white transition-colors"
                    title="E-Mail"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-pusch-green-800 mb-6">
              Warum mit uns arbeiten?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pusch-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-bold text-pusch-green-800 mb-3">Expertise</h4>
                <p className="text-gray-700">Jahrelange Erfahrung in nachhaltiger Landwirtschaft und modernster Technologie</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pusch-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="text-xl font-bold text-pusch-green-800 mb-3">Innovation</h4>
                <p className="text-gray-700">Ständige Weiterentwicklung und Integration neuester 3D- und IoT-Technologien</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pusch-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-pusch-green-800 mb-3">Support</h4>
                <p className="text-gray-700">Umfassende Betreuung von der Planung bis zur erfolgreichen Umsetzung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
