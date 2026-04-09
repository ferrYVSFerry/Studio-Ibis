import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
            Pronto per il tuo <br />
            <span className="italic text-white/50">prossimo tatuaggio?</span>
          </h2>
          <p className="text-white/60 font-light max-w-xl mb-12">
            I nostri artisti sono molto richiesti e le agende si riempiono velocemente. Prenota ora la tua consulenza gratuita per assicurarti il tuo posto.
          </p>
          <a
            href="#contact"
            className="px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-colors"
          >
            Prenota il tuo tatuaggio
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div>
            <a href="#" className="text-2xl font-serif tracking-widest uppercase text-white block mb-4">
              Studio Ibis
            </a>
            <p className="text-white/50 text-sm font-light">
              L'arte sulla tua pelle, <br />
              con precisione e passione.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm uppercase tracking-widest mb-2">Link Rapidi</h4>
            <a href="#about" className="text-white/50 hover:text-white text-sm transition-colors">Chi Siamo</a>
            <a href="#portfolio" className="text-white/50 hover:text-white text-sm transition-colors">Portfolio</a>
            <a href="#faq" className="text-white/50 hover:text-white text-sm transition-colors">FAQ</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm uppercase tracking-widest mb-2">Social</h4>
            <a 
              href="#" 
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-24 text-center text-white/50 text-sm flex flex-col gap-4">
          <p>&copy; 2026 Lorenzo Ferrara - Licenza Creative Commons Attribuzione (CC BY 4.0)</p>
          <p>È consentito condividere e adattare il contenuto, anche per scopi commerciali, purché venga riconosciuta l'attribuzione all'autore.</p>
          <a href="https://creativecommons.org/licenses/by/4.0/deed.it" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Vedi i dettagli della licenza</a>
        </div>
      </div>
    </footer>
  );
}
