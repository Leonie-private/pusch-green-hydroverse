
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop",
      title: "Hydroponik - Die Zukunft des Anbaus",
      description: "Innovative Systeme ohne Erde"
    },
    {
      url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920&h=1080&fit=crop",
      title: "Aquaponik - Nachhaltiger Kreislauf",
      description: "Fische und Pflanzen in Harmonie"
    },
    {
      url: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deec?w=1920&h=1080&fit=crop",
      title: "Aeroponik - Maximale Effizienz",
      description: "Wurzeln schweben in der Luft"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            Pusch-Green
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-pusch-green-300 transition-colors">Über uns</a>
            <a href="#systems" className="text-white hover:text-pusch-green-300 transition-colors">Systeme</a>
            <a href="#team" className="text-white hover:text-pusch-green-300 transition-colors">Team</a>
            <a href="#contact" className="text-white hover:text-pusch-green-300 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <div className="text-center text-white max-w-4xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {heroImages[currentImage].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            {heroImages[currentImage].description}
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-pusch-green-600 hover:bg-pusch-green-700 text-white px-8 py-4">
              Systeme entdecken
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pusch-green-600 px-8 py-4">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Image Navigation */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
