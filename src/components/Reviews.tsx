import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Giulia M.',
    text: 'Esperienza fantastica. Lo studio è pulitissimo e l\'atmosfera ti mette subito a tuo agio. Il mio tatuaggio fine line è guarito perfettamente ed è esattamente come lo volevo.',
    rating: 5
  },
  {
    id: 2,
    name: 'Alessandro F.',
    text: 'Ho fatto qui il mio primo tatuaggio e non potevo scegliere posto migliore. Mi hanno spiegato tutto il processo con pazienza. Professionalità ai massimi livelli.',
    rating: 5
  },
  {
    id: 3,
    name: 'Chiara D.',
    text: 'Artisti veri. Hanno trasformato una mia mezza idea in un capolavoro realistico. L\'attenzione all\'igiene è maniacale, cosa che ho apprezzato tantissimo.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-16 px-6 bg-black relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
            >
              Dicono di Noi
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-white"
            >
              Recensioni
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">5.0 su Google</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0a0a0a] p-8 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="flex gap-1 text-[#D4AF37] mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <p className="text-white font-serif text-lg">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
