import React, { Component } from 'react'
import Header from '../components/HeaderHome';
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import { ReactComponent as Ideas } from '../assets/images/ideas.svg'
var Name = 'John Doe'


const mcdonalds_1 = {
    name: "McDonald's", picUrl: '/img/mcd.jfif', formTitle: 'McFeedback™',
    formText: 'Miten meillä meni? Anna palautetta viimeisimmästä ravintolakäynnistäsi ja auta meitä kehittämään toimintaamme.',
    formUrl: '#', color:'blue', minutes:'(3 min)'
}
const mcdonalds_2 = {
    name: "McDonald's", picUrl: '/img/beef.jfif', formTitle: 'Menutestaus Helsinki',
    formText: 'Uusi French Beef. Valkosipulisämpylän välissä kaksi 100% naudanlihapihviä, siivu emmental-sulatejuustoa, kaksi viipaletta pekonia ja bataviasalaattia.',
    formUrl: '#', color:'purple'
}
const mcdonalds_3 = {
    name: "McDonald's", picUrl: '/img/salaatti.jfif', formTitle: 'All Vegan -salaatti',
    formText: 'Uudessa raikkaassa All Vegan -salaatissa maistuvat soijapavut, lehtikaali, pinaatti ja pikkelöity porkkana. Nimensä mukaisesti salaatti on 100 % vegaaninen.',
    formUrl: '#', color:'purple'
}

const hese_1 = {
    name: "Hesburger", picUrl: '/img/hese.jpg', formTitle: 'Kiitä, moiti, kysy tai ehdota',
    formText: 'Saitko Hesburgerissa erityisen mukavaa palvelua? Huomasitko jossain parantamisen varaa? Haluaisitko valikoimiimme uusia tuotteita? Kaikki palaute on meille arvokasta. ',
    formUrl: '#', color:'green', minutes:'(5 min)'
}

const hese_2 = {
    name: "Hesburger", picUrl: '/img/hese2.png', formTitle: 'Menutestaus Jyväskylä',
    formText: 'Supersuosittu Kebab-hampurilainen.',
    formUrl: '#', color:'green'
}


const burgerking_1 = {
    name: "Burger King", picUrl: '/img/burgerking.jpeg', formTitle: 'Oma BK-Kokemukseni',
    formText: 'Tervetuloa Minun BURGER KING® -kokemukseni -kyselyyn. Arvostamme rehellistä palautettasi ja sitä, että käytät aikaasi kyselyyn vastaamiseen.',
    formUrl: '#', color:'red', minutes:'(10 min)'
}

const burgerking_2 = {
    name: "Burger King", picUrl: '/img/whopper.png', formTitle: 'Menutestaus Tampere',
    formText: 'TRIPLA WHOPPER - Kolme kerrosta makusi mukaan',
    formUrl: '#', color:'blue'
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
                <section id='kyselyt' className="d-flex align-items-center justify-content-center kysely">
                    <div className="container card-container" data-aos="fade-up">
                        <header class="section-header">
                            <h3>Kyselyt</h3>
                            <p>Veritatis et dolores facere numquam et praesentium</p>
                        </header>
                        <div class="row g-4 d-flex">
                        <FormCard kysely={mcdonalds_1} tyyppi='Vastaa' />
                        <FormCard kysely={hese_1} tyyppi='Vastaa' />
                        <FormCard kysely={burgerking_1} tyyppi='Vastaa' />
                        <FormCard kysely={hese_1} tyyppi='Vastaa' />
                        <FormCard kysely={mcdonalds_1} tyyppi='Vastaa' />
                        <FormCard kysely={burgerking_1} tyyppi='Vastaa' />
                        </div>
                    </div>
                </section>
                <section id='menutestaus' className="d-flex align-items-center bg-light justify-content-center kysely">
                    <div className="container card-container" data-aos="fade-up">
                        <header class="section-header">
                            <h3>Menutestaukset</h3>
                            <p>Veritatis et dolores facere numquam et praesentium</p>
                        </header>
                        <div class="row g-4 d-flex">
                        <FormCard kysely={mcdonalds_2} tyyppi='Osallistu' />
                        <FormCard kysely={hese_2} tyyppi='Osallistu' />
                        <FormCard kysely={burgerking_2} tyyppi='Osallistu' />
                        <FormCard kysely={mcdonalds_3} tyyppi='Osallistu' />
                        <FormCard kysely={burgerking_2} tyyppi='Osallistu' />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
