import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Contatto',
    description: 'Compila il modulo o scrivici su WhatsApp. Raccontaci la tua idea, la zona del corpo e le dimensioni indicative.'
  },
  {
    number: '02',
    title: 'Consulenza',
    description: 'Fissiamo un incontro (di persona o online) per definire i dettagli, lo stile e scegliere l\'artista più adatto al tuo progetto.'
  },
  {
    number: '03',
    title: 'Disegno',
    description: 'L\'artista elabora un design unico basato sulle tue indicazioni. Avrai modo di visionarlo e richiedere eventuali modifiche.'
  },
  {
    number: '04',
    title: 'Sessione',
    description: 'Il giorno dell\'appuntamento, in un ambiente sterile e rilassante, diamo vita alla tua idea sulla pelle.'
  }
];

export default function BookingProcess() {
  return (
    <section className="py-16 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
          >
            Come Funziona
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-white"
          >
            Il Processo
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-3xl text-[#D4AF37]">{step.number}</span>
              </div>
              <h4 className="font-serif text-2xl text-white mb-4">{step.title}</h4>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
