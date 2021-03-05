import React, { Component } from 'react'
import Header from '../components/HeaderHome';
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import { ReactComponent as Ideas } from '../assets/images/ideas.svg'
var Name = 'John Doe'


const mcdonalds_1 = {
    name: "McDonald's", picUrl: '/img/mcd.jfif', formTitle: 'McFeedback™',
    formText: 'Miten meillä meni? Anna palautetta viimeisimmästä ravintolakäynnistäsi ja auta meitä kehittämään toimintaamme.',
    formUrl: '#'
}

const hese_1 = {
    name: "Hesburger", picUrl: '#', formTitle: 'KIITÄ, MOITI, KYSY TAI EHDOTA',
    formText: 'Saitko Hesburgerissa erityisen mukavaa palvelua? Huomasitko jossain parantamisen varaa? Haluaisitko valikoimiimme uusia tuotteita? Kaikki palaute on meille arvokasta. ',
    formUrl: '#'
}

const burgerking_1 = {
    name: "Burger King", picUrl: '#', formTitle: 'Oma BK-Kokemukseni',
    formText: 'Tervetuloa Minun BURGER KING® -kokemukseni -kyselyyn. Arvostamme rehellistä palautettasi ja sitä, että käytät aikaasi kyselyyn vastaamiseen.',
    formUrl: '#'
}



export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <a id='page-top'></a>
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-2">
                                <h1>Tervetuloa {Name}!</h1>
                                <p>Mitä tekstiä tälle sivulle kuuluu? Pystyisikö tähän koostamaan vastaajan aktiivisuutta tai nostamaan viime kyselyn vaikutuksia?</p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-1 hero-img">
                                <div className="img-fluid animated">
                                    <Ideas />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='kyselyt' className="d-flex align-items-center justify-content-center bg-light kysely">
                    <div className="container" data-aos="fade-up">
                        <header class="section-header">
                            <h2>Kyselyt</h2>
                            <p>Veritatis et dolores facere numquam et praesentium</p>
                        </header>
                        <div class="row gy-4">
                        <FormCard kysely={mcdonalds_1} />
                        <FormCard kysely={hese_1} />
                        <FormCard kysely={burgerking_1} />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
