
import { Droplets, Leaf, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Droplets className="w-12 h-12 text-pusch-green-600" />,
      title: "90% weniger Wasser",
      description: "Unsere Systeme verbrauchen deutlich weniger Wasser als traditionelle Landwirtschaft"
    },
    {
      icon: <Leaf className="w-12 h-12 text-nature-600" />,
      title: "100% Nachhaltig",
      description: "Umweltfreundliche Anbaumethoden ohne schädliche Chemikalien"
    },
    {
      icon: <Zap className="w-12 h-12 text-pusch-green-600" />,
      title: "IoT & 3D Technologie",
      description: "Modernste Technologie für optimale Ergebnisse und Automatisierung"
    },
    {
      icon: <Globe className="w-12 h-12 text-nature-600" />,
      title: "Klimaschutz",
      description: "Ein Beitrag gegen den Klimawandel durch ressourcenschonende Methoden"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pusch-green-50 to-nature-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-pusch-green-800 mb-6">
            Über Pusch-Green
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-balance">
            Wir sind Pioniere im Bereich nachhaltiger Anbausysteme und entwickeln innovative 
            Lösungen für die Landwirtschaft der Zukunft. Mit modernster 3D- und IoT-Technologie 
            schaffen wir Systeme, die nicht nur effizienter sind, sondern auch einen wichtigen 
            Beitrag zum Klimaschutz leisten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pusch-green-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-pusch-green-800 mb-6">
                Warum ist das wichtig?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong className="text-pusch-green-600">Klimawandel:</strong> Der Wassermangel wird zu einem der größten Probleme unserer Zeit. 
                  Traditionelle Landwirtschaft verbraucht etwa 70% des weltweiten Süßwassers.
                </p>
                <p className="text-lg">
                  <strong className="text-pusch-green-600">Nachhaltigkeit:</strong> Unsere Systeme ermöglichen es, mehr Nahrung mit weniger 
                  Ressourcen zu produzieren - ein entscheidender Faktor für die Zukunft unseres Planeten.
                </p>
                <p className="text-lg">
                  <strong className="text-pusch-green-600">Innovation:</strong> Durch den Einsatz von 3D-Druck und IoT-Sensoren können 
                  wir präzise, automatisierte Systeme schaffen, die optimal funktionieren.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1deec?w=600&h=400&fit=crop"
                alt="Nachhaltiger Anbau"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-pusch-green-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm">weniger Wasser</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
