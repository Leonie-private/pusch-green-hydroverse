
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pusch-green-800 mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance">
            Haben Sie Fragen zu unseren Systemen oder möchten Sie mehr erfahren? 
            Wir freuen uns auf Ihre Nachricht und beraten Sie gerne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-pusch-green-800">
                Nachricht senden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-pusch-green-700">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 focus:border-pusch-green-500 focus:ring-pusch-green-500"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-pusch-green-700">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 focus:border-pusch-green-500 focus:ring-pusch-green-500"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-pusch-green-700">Betreff *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 focus:border-pusch-green-500 focus:ring-pusch-green-500"
                    placeholder="Worum geht es in Ihrer Nachricht?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-pusch-green-700">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 focus:border-pusch-green-500 focus:ring-pusch-green-500"
                    placeholder="Beschreiben Sie Ihr Anliegen oder stellen Sie Ihre Fragen..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-pusch-green-600 hover:bg-pusch-green-700 text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-pusch-green-800">
                  Kontaktinformationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pusch-green-100 rounded-full">
                    <Mail className="w-6 h-6 text-pusch-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pusch-green-800 mb-1">E-Mail</h4>
                    <p className="text-gray-700">info@pusch-green.de</p>
                    <p className="text-gray-700">support@pusch-green.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pusch-green-100 rounded-full">
                    <Phone className="w-6 h-6 text-pusch-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pusch-green-800 mb-1">Telefon</h4>
                    <p className="text-gray-700">+49 (0) 123 456 789</p>
                    <p className="text-gray-700">Mo-Fr: 9:00 - 17:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pusch-green-100 rounded-full">
                    <MapPin className="w-6 h-6 text-pusch-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pusch-green-800 mb-1">Adresse</h4>
                    <p className="text-gray-700">
                      Pusch-Green GmbH<br />
                      Innovationsstraße 123<br />
                      12345 Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-gradient-to-br from-pusch-green-50 to-nature-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-pusch-green-800 mb-4">
                  Warum uns kontaktieren?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pusch-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Kostenlose Erstberatung zu Ihrem Projekt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pusch-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Individuelle Systemplanung und -design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pusch-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Unterstützung bei der Umsetzung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-pusch-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Langfristiger Support und Wartung</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
