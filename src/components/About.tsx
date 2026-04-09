import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Images */}
        <div className="relative h-[600px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-4/5 h-4/5 z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000&auto=format&fit=crop"
              alt="Tattoo Artist"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-3/5 h-3/5 z-20 border-8 border-black"
          >
            <img
              src="https://images.pexels.com/photos/4123846/pexels-photo-4123846.jpeg?_gl=1*1c4arox*_ga*MTEwNDkwNDcyNS4xNzcwMDQ1Njkz*_ga_8JE65Q40S6*czE3NzU1ODQ1NzgkbzMkZzEkdDE3NzU1ODQ1ODkkajQ5JGwwJGgw"
              alt="Tattoo Detail"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">Chi Siamo</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Oltre l'inchiostro. <br />
              <span className="italic text-white/70">Una filosofia d'arte.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/70 font-light text-lg leading-relaxed"
          >
            <p>
              Studio Ibis non è solo uno studio di tatuaggi, è un laboratorio creativo dove le tue storie prendono forma. Crediamo che ogni tatuaggio sia un viaggio intimo, una collaborazione tra la visione del cliente e la maestria dell'artista.
            </p>
            <p>
              La nostra identità si fonda sull'eccellenza artistica e sul rigore. Manteniamo i più alti standard di igiene e sicurezza, garantendo un ambiente sterile, professionale e accogliente.
            </p>
            <p>
              Dal primo schizzo all'ultima goccia d'inchiostro, ti accompagniamo con dedizione, trasformando la tua pelle in una tela senza tempo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="font-serif text-3xl text-white mb-2">10+</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Anni di Esperienza</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest text-white/50">Igiene Garantita</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
