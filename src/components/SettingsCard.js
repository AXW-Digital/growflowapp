import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class SettingsCard extends Component {
    render() {
        return (
            <div>
                <div className="card profile-card my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.cardTitle}</h5>

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Tiedot">
                                    <div class="tab-pane body active" id="about">
                                        <small class="text-muted">Nimi </small>
                                        <p>{this.props.cardForename} {this.props.cardSurname}</p>
                                        <hr />
                                        <small class="text-muted">Email address: </small>
                                        <p>{this.props.cardEmailAddress}</p>
                                        <hr />
                                        <small class="text-muted">Phone: </small>
                                        <p>{this.props.cardPhoneNumber}</p>
                                        <hr />
                                        <small class="text-muted">Birth Date: </small>
                                        <p class="m-b-0">{this.props.cardBirthDate}</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    Profiili
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

export default SettingsCard;