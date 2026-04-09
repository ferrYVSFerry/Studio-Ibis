import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
            >
              Prenota o Chiedi Info
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-white mb-12"
            >
              Contattaci
            </motion.h3>

            <div className="space-y-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-medium mb-1">Indirizzo</h4>
                  <p className="text-white/60 font-light">
                    Studio Ibis Demo<br />
                    Via Roma 1, Milano (MI) Italia
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <Phone className="text-[#D4AF37] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-medium mb-1">Telefono / WhatsApp</h4>
                  <p className="text-white/60 font-light">+39 333 123 4567</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <Clock className="text-[#D4AF37] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-medium mb-1">Orari</h4>
                  <p className="text-white/60 font-light">
                    Mar - Sab: 10:00 - 19:00<br />
                    Dom - Lun: Chiuso
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              href="#"
              className="inline-block px-8 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-widest font-medium hover:bg-[#B5952F] transition-colors"
            >
              Scrivici su WhatsApp
            </motion.a>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 bg-white/5 flex items-center justify-center"
          >
            <p className="text-white/50 text-sm uppercase tracking-widest">Mappa Fittizia</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
