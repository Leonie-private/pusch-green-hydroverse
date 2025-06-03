
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Play, ChevronRight } from 'lucide-react';

const SystemsSection = () => {
  const [activeSystem, setActiveSystem] = useState(0);

  const systems = [
    {
      title: "Hydroponik",
      subtitle: "Erdelose Kultivierung",
      description: "Bei der Hydroponik wachsen Pflanzen in einer Nährlösung ohne Erde. Die Wurzeln erhalten alle notwendigen Nährstoffe direkt über das Wasser.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      benefits: [
        "90% weniger Wasserverbrauch",
        "Schnelleres Pflanzenwachstum",
        "Keine Bodenschädlinge",
        "Ganzjährige Produktion möglich"
      ],
      steps: [
        "Aufbau des Nährstoffbehälters",
        "Installation der Pumpen und Rohrsysteme",
        "Einstellung der pH-Werte",
        "Pflanzung der Setzlinge",
        "Überwachung durch IoT-Sensoren"
      ],
      color: "pusch-green"
    },
    {
      title: "Aquaponik",
      subtitle: "Symbiose zwischen Fischen und Pflanzen",
      description: "Aquaponik kombiniert Fischzucht mit Pflanzenzucht. Die Fische produzieren Nährstoffe für die Pflanzen, während die Pflanzen das Wasser für die Fische reinigen.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&h=600&fit=crop",
      benefits: [
        "Natürlicher Nährstoffkreislauf",
        "Doppelte Ernte: Fische und Pflanzen",
        "Minimaler Wasserwechsel nötig",
        "Pestizidfreie Produktion"
      ],
      steps: [
        "Aufbau des Fischbeckens",
        "Installation der Biofilter",
        "Verbindung zu den Pflanzbeeten",
        "Einsetzen der Fische",
        "Überwachung des Ökosystems"
      ],
      color: "blue"
    },
    {
      title: "Aeroponik",
      subtitle: "Wurzeln schweben in der Luft",
      description: "Bei der Aeroponik hängen die Wurzeln frei in der Luft und werden regelmäßig mit einer feinen Nährstofflösung besprüht.",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deec?w=800&h=600&fit=crop",
      benefits: [
        "Bis zu 95% weniger Wasser",
        "Maximale Sauerstoffversorgung",
        "Schnellstes Wachstum",
        "Höchste Raum-Effizienz"
      ],
      steps: [
        "Bau der Sprühkammern",
        "Installation der Hochdruck-Sprühdüsen",
        "Programmierung der Sprühintervalle",
        "Aufhängung der Pflanzen",
        "Automatische Überwachung"
      ],
      color: "nature"
    }
  ];

  const currentSystem = systems[activeSystem];

  return (
    <section id="systems" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pusch-green-800 mb-6">
            Unsere Anbausysteme
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance">
            Entdecken Sie die drei innovativen Anbaumethoden der Zukunft. 
            Jedes System hat seine eigenen Vorteile und Anwendungsbereiche.
          </p>
        </div>

        {/* System Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {systems.map((system, index) => (
            <Button
              key={index}
              onClick={() => setActiveSystem(index)}
              variant={activeSystem === index ? "default" : "outline"}
              size="lg"
              className={`px-8 py-4 text-lg transition-all duration-300 ${
                activeSystem === index 
                  ? 'bg-pusch-green-600 hover:bg-pusch-green-700 text-white shadow-lg' 
                  : 'hover:bg-pusch-green-50 hover:border-pusch-green-300'
              }`}
            >
              {system.title}
            </Button>
          ))}
        </div>

        {/* Active System Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-pusch-green-800 mb-4">
              {currentSystem.title}
            </h3>
            <p className="text-xl text-pusch-green-600 mb-6">
              {currentSystem.subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentSystem.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-pusch-green-800">Vorteile</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentSystem.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-pusch-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-pusch-green-800">Aufbau-Schritte</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {currentSystem.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-pusch-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-pusch-green-600 hover:bg-pusch-green-700 text-white">
                <Download className="w-5 h-5 mr-2" />
                PDF herunterladen
              </Button>
              <Button size="lg" variant="outline" className="border-pusch-green-600 text-pusch-green-600 hover:bg-pusch-green-50">
                <Play className="w-5 h-5 mr-2" />
                Video ansehen
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={currentSystem.image}
                alt={currentSystem.title}
                className="rounded-2xl shadow-2xl w-full transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-br from-pusch-green-50 to-nature-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-pusch-green-800 text-center mb-12">
            Unser 3D & IoT Entwicklungsprozess
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "3D Design & Prototyping",
                description: "Entwicklung maßgeschneiderter Tower-Systeme mit modernster 3D-Technologie",
                icon: "🖨️"
              },
              {
                step: "2", 
                title: "IoT Integration",
                description: "Installation intelligenter Sensoren für Temperatur, pH-Wert und Nährstoffgehalt",
                icon: "📡"
              },
              {
                step: "3",
                title: "Dokumentation & Support",
                description: "Umfassende Anleitungen, Videos und kontinuierlicher Support für optimale Ergebnisse",
                icon: "📚"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="bg-pusch-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-pusch-green-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
