import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

// Simulated Instagram feed data (in a real app, this would be fetched via Instagram Graph API)
const instagramPosts = [
  { id: 1, likes: 452, comments: 18, src: '/imgs/img1.heic.jpeg' },
  { id: 2, likes: 389, comments: 14, src: '/imgs/img2.heic.jpeg' },
  { id: 3, likes: 512, comments: 24, src: '/imgs/img3.heic.jpeg' },
  { id: 4, likes: 289, comments: 8, src: '/imgs/img4.heic.jpeg' },
  { id: 5, likes: 634, comments: 45, src: '/imgs/img5.heic.jpeg' },
  { id: 6, likes: 421, comments: 18, src: '/imgs/img6.heic.jpeg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4"
            >
              Instagram
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-white"
            >
              @studio_ibis_demo
            </motion.h3>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#D4AF37] transition-colors text-sm uppercase tracking-widest font-medium"
          >
            <Instagram size={18} />
            Seguici
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              href="#"
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group block"
            >
              <img
                src={post.src}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle size={20} fill="currentColor" />
                  <span className="font-medium">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
