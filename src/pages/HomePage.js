import React, { Component } from 'react'
import Header from '../components/HeaderHome';
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import { ReactComponent as Ideas } from '../assets/images/ideas.svg'
var Name = 'John Doe'


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
                <section id='tasks' className="d-flex align-items-center justify-content-center bg-light">
                    <div className="row">
                        <FormCard/>
                        <FormCard/>
                        <FormCard/>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
