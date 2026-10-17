import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
import Speakers from '@/components/Speakers';
import Hackathon from '@/components/Hackathon';
import Venue from '@/components/Venue';
import Register from '@/components/Register';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Agenda />
        <Speakers />
        <Hackathon />
        <Register />
        <Venue />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
