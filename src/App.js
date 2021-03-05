import React from 'react'
//components
import Header from './components/Header';
import Vaikuttava from './components/Vaikuttava';
import Kukkavoi from './components/Kukkavoi'
import Kasvuvaikkuttajat from './components/Kasvuvaikkuttajat'
import Growflow from './components/Growflow'
import Voima from './components/Voima'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 1500,
      once: true
    })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Vaikuttava />
        <Kukkavoi />
        <Kasvuvaikkuttajat />
        <Growflow />
        <Voima />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

