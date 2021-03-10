import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class SettingsCard extends Component {
    render() {
        return (
            <div>
                <div className="card profile-card my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.cardTitle}</h5>

                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Tiedot">
                                <div className="tab-pane body active" id="about">
                                    <div className='row clearfix'>
                                        <div className='col-12 setting-col'>
                                            <small className="text-muted ">Perustiedot: </small>
                                            <hr />
                                        </div>
                                        <div className='col-lg-6 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputForeName" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputForeName">Etunimi</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputSurName" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputSurName">Sukunimi</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputEmail" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputEmail">Sähköposti</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputPhoneNumber" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputPhoneNumber">Puhelinmuero</label>
                                            </div>
                                        </div>
                                        <div className='col-12 setting-col-n'>
                                            <small className="text-muted setting-col-n">Paikkatiedot: </small>
                                            <hr />
                                        </div>
                                        <div className='col-lg-6 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputAddress" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputAddress">Osoite</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-2 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputAddrNum" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputAddrNum">Numero</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-12'>
                                            <div className="form-label-group">
                                                <input type="text" id="inputCity" className="form-control" placeholder="." autoFocus />
                                                <label htmlFor="inputCity">Paikkakunta</label>
                                            </div>
                                        </div>
                                        <div className='col-3'>
                                        <a href="/signin" class="btn btn-lg btn-block text-uppercase btn-update-settings">Päivitä</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="security" title="Turvallisuus">
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