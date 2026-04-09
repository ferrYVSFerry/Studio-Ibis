import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
        >
          L'Arte Sulla Tua Pelle
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight"
        >
          Studio Ibis
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 font-light max-w-2xl text-balance mb-12"
        >
          Un santuario per l'espressione personale. Dove la precisione incontra la creatività per dare vita a opere d'arte indelebili.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-widest font-medium hover:bg-[#B5952F] transition-colors w-full sm:w-auto text-center"
          >
            Prenota Ora
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center"
          >
            Guarda il Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scorri</span>
        <div className="w-[1px] h-6 md:h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
