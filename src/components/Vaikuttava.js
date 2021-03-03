import React from 'react';
import {ReactComponent as Nainen } from './../assets/images/nainen.svg';


class Vaikuttava extends React.Component {
    
    greetings = (e) => {
        alert('get started')
    }

    render() {
        return (
            <div>
                  <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-2">
                                <h1>Olet vaikuttava!</h1>
                                <h2>Kasvuvaikuttajana autat luomaan parempaa ymmärrystä elämyspuolen palveluista.
                                    Ole mukana muokkaamassa tulevaisuutta!</h2>
                                <a href="#about" onClick={this.greetings} className="btn-get-started scrollto">kirjaudu</a>
                                <a href="#about" onClick={this.greetings} className="btn-get-rekister scrollto">rekisteröidy</a>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-1 hero-img">
                                <div className="img-fluid animated">
                                    <Nainen />
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default Vaikuttava;