import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import About from './Component/About';
import Services from './Component/Services';
import Team from './Component/Team';
import FAQs from './Component/FAQs';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Modal from './Component/Modal';

function App() {
  return (
    <div className="App">
      <>
        <Navbar></Navbar>
        {/* Navbar End */}
        {/* Carousel Start */}
        <Carousel></Carousel>
        {/* Carousel End */}
        {/* About Start */}
        <About></About>
        {/* About End */}
        {/* Service Start */}
        <Services></Services>
        {/* Service End */}
        {/* Team Start */}
        <Team></Team>
        {/* Team End */}
        {/* FAQs Start */}
        <FAQs></FAQs>
        {/* FAQs End */}
        {/* Contact Start */}
        <Contact></Contact>
        {/* Contact End */}
        {/* Footer Start */}
        <Footer></Footer>
        {/* Footer End */}
        {/* Modal */}
        <Modal></Modal>
        {/* Modal
  Back to Top */}
        {/* <a
    href="#"
    className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
  >
    <i className="fa fa-angle-double-up" />
  </a> */}
      </>

    </div>
  );
}

export default App;
