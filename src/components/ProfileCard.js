import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class ProfileCard extends Component {
    render() {
        return (
            <div>
                <div className="card profile-card my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.cardTitle}</h5>

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Käyttäjä">
                                    <div class="tab-pane body active" id="about">
                                        <small class="text-muted">Nimi </small>
                                        <p>{this.props.forename} {this.props.surname}</p>
                                        <hr />
                                        <small class="text-muted">Sähköposti: </small>
                                        <p>{this.props.emailAddress}</p>
                                        <hr />
                                        <small class="text-muted">Puhelin: </small>
                                        <p>{this.props.phoneNumber}</p>
                                        <hr />
                                        <small class="text-muted">Syntymäaika: </small>
                                        <p class="m-b-0">{this.props.birthDate}</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Tiedot">
                                <div class="tab-pane body active" id="about">
                                        <small class="text-muted">Rekisteröitynyt:  </small>
                                        <p>{this.props.memberSince}</p>
                                        <hr />
                                        <small class="text-muted">Viimeksi kirjautunut: </small>
                                        <p>{this.props.lastLogin}</p>
                                        <hr />
                                        <small class="text-muted">Kotipaikkakunta </small>
                                        <p>{this.props.homeCity}</p>
                                        <hr />
                                        <small class="text-muted">Osoite</small>
                                        <p class="m-b-0">{this.props.homeAddress}</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                    Muuta
                                </Tab>
                            </Tabs>


                    </div>
                </div>

            </div>
        );
    }
}

export default ProfileCard;