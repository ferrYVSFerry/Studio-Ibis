import { motion } from 'motion/react';
import { PenTool, RefreshCw, MessageSquare, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={32} strokeWidth={1.5} />,
    title: 'Design Personalizzato',
    description: 'Ogni tatuaggio nasce da un\'idea unica. Lavoriamo con te per creare un design su misura che rispecchi perfettamente la tua visione e la tua anatomia.'
  },
  {
    icon: <RefreshCw size={32} strokeWidth={1.5} />,
    title: 'Cover-Up & Restauro',
    description: 'Diamo nuova vita a vecchi tatuaggi o copriamo quelli indesiderati con maestria, trasformando il passato in una nuova opera d\'arte di cui andare fieri.'
  },
  {
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    title: 'Consulenza Gratuita',
    description: 'Prima di ogni sessione, offriamo un incontro per discutere idee, posizionamento, dimensioni e per rispondere a qualsiasi dubbio sul processo.'
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Cura Post-Tatuaggio',
    description: 'Ti forniamo istruzioni dettagliate e prodotti consigliati per garantire una guarigione perfetta e mantenere i colori brillanti nel tempo.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
          >
            Cosa Offriamo
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-white"
          >
            I Nostri Servizi
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="text-[#D4AF37] p-4 border border-white/10 rounded-full bg-black shrink-0">
                {service.icon}
              </div>
              <div>
                <h4 className="font-serif text-2xl text-white mb-3">{service.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
