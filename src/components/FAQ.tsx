import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Fa molto male farsi un tatuaggio?',
    answer: 'Il dolore è soggettivo e dipende molto dalla zona del corpo scelta e dalla tua tolleranza personale. In generale, è un fastidio sopportabile. Il nostro staff farà il possibile per metterti a tuo agio e fare pause se necessario.'
  },
  {
    question: 'Come viene calcolato il prezzo?',
    answer: 'Il costo dipende dalla dimensione, dai dettagli, dallo stile e dal tempo necessario per completare il lavoro. Durante la consulenza gratuita ti forniremo un preventivo preciso prima di iniziare qualsiasi progetto.'
  },
  {
    question: 'Quali sono i tempi di attesa per un appuntamento?',
    answer: 'I tempi variano a seconda dell\'artista scelto e del periodo dell\'anno. Solitamente consigliamo di prenotare con almeno 2-4 settimane di anticipo, ma a volte abbiamo disponibilità per lavori più piccoli anche a breve termine.'
  },
  {
    question: 'Come devo curare il tatuaggio appena fatto?',
    answer: 'Ti forniremo istruzioni scritte dettagliate a fine sessione. In sintesi: dovrai tenerlo pulito lavandolo delicatamente con sapone neutro, applicare uno strato sottile di crema specifica e proteggerlo da sole, mare e piscina per le prime 3-4 settimane.'
  },
  {
    question: 'Posso portare un accompagnatore?',
    answer: 'Per garantire la massima concentrazione dell\'artista e mantenere l\'ambiente sterile e tranquillo, chiediamo di venire da soli. In casi particolari, possiamo valutare la presenza di un solo accompagnatore.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
          >
            Domande Frequenti
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-white"
          >
            Tutto ciò che devi sapere
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="font-serif text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                  {faq.question}
                </span>
                <span className="text-white/50 ml-4 shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/60 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
