import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import Industries from './components/Industries';
import Cta from './components/Cta';
import Footer from './components/Footer';

const Landing = () => {
  return (
    <div className="bg-cs-bg dark:bg-cs-dark-bg text-cs-dark-primary dark:text-cs-primary">
      <Header coloured="home"/>
      <div className="justify-center items-start flex flex-col">
        <Hero />
        <Features />
        <Steps />
        <Industries />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;