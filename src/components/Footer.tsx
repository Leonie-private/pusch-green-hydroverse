
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-pusch-green-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pusch-Green</h3>
            <p className="text-pusch-green-200 mb-4">
              Innovative Anbausysteme für eine nachhaltige Zukunft. 
              Weniger Wasser, mehr Ertrag, bessere Umwelt.
            </p>
            <p className="text-pusch-green-300 text-sm">
              © 2024 Pusch-Green GmbH
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-pusch-green-200">
              <li><a href="#about" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#systems" className="hover:text-white transition-colors">Systeme</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h4 className="font-bold mb-4">Systeme</h4>
            <ul className="space-y-2 text-pusch-green-200">
              <li><a href="#" className="hover:text-white transition-colors">Hydroponik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aquaponik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aeroponik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">3D & IoT Lösungen</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-pusch-green-200">
              <p>info@pusch-green.de</p>
              <p>+49 (0) 123 456 789</p>
              <p>Innovationsstraße 123<br />12345 Berlin</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-pusch-green-600" />

        {/* Impressum */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Impressum</h3>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm text-pusch-green-200">
            <div>
              <h4 className="font-bold text-white mb-2">Angaben gemäß § 5 TMG</h4>
              <p>
                Pusch-Green GmbH<br />
                Innovationsstraße 123<br />
                12345 Berlin<br />
                Deutschland
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Kontakt</h4>
              <p>
                Telefon: +49 (0) 123 456 789<br />
                E-Mail: info@pusch-green.de<br />
                Website: www.pusch-green.de
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Vertreten durch</h4>
              <p>
                Geschäftsführer: Dr. Maria Schneider<br />
                Registergericht: Amtsgericht Berlin<br />
                Registernummer: HRB 123456<br />
                USt-IdNr: DE123456789
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Haftungsausschluss</h4>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>

          <div className="text-xs text-pusch-green-300">
            <p>
              <strong>Datenschutz:</strong> Ihre Daten werden gemäß der DSGVO verarbeitet. 
              Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-pusch-green-600" />

        <div className="text-center text-pusch-green-300">
          <p>
            🌱 Für eine nachhaltige Zukunft - Weniger Wasser, mehr Leben 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
