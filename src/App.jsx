import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import AboutStatement from './components/AboutStatement';
import Metrics from './components/Metrics';
import Methodology from './components/Methodology';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <AboutStatement />
        <Metrics />
        <Methodology />
        <Expertise />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
