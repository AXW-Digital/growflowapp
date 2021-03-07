import React, { Component } from 'react'
import Header from '../components/HeaderHome';
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import { ReactComponent as Ideas } from '../assets/images/ideas.svg'
import cardvaluelist from '../assets/js/cardvalues'
var Name = 'John Doe'

// Function that creates the card content for the mapping function
function createCard(cardContent){
    return (
        <FormCard
        key = {cardContent.id}
        name = {cardContent.name}
        picUrl = {cardContent.picUrl}
        formTitle = {cardContent.formTitle}
        formText = {cardContent.formText}
        formUrl = {cardContent.formUrl}
        color = {cardContent.color}
        minutes = {cardContent.minutes}
        tyyppi = {cardContent.tyyppi}
        />
    )
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
                        <header className="section-header">
                            <h3>Kyselyt</h3>
                            <p>Veritatis et dolores facere numquam et praesentium</p>
                        </header>
                        <div className="row g-4 d-flex">
                            {cardvaluelist.filter(card => card.tyyppi === 'Vastaa').map(createCard)}
                        </div>
                    </div>
                </section>
                <section id='menutestaus' className="d-flex align-items-center bg-light justify-content-center kysely">
                    <div className="container card-container" data-aos="fade-up">
                        <header className="section-header">
                            <h3>Menutestaukset</h3>
                            <p>Veritatis et dolores facere numquam et praesentium</p>
                        </header>
                        <div className="row g-4 d-flex">
                        {cardvaluelist.filter(card => card.tyyppi === 'Osallistu').map(createCard)}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
