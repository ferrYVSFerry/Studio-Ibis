/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingProcess from './components/BookingProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Reviews />
        <BookingProcess />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

