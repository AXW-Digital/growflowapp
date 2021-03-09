import React, { Component } from 'react';

class ProfileCard extends Component {
    render() {
        return (
            <div>
                 <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">{this.props.cardTitle}</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Sähköposti</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Salasana</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Muista minut</label>
                                        </div>
                                        <button className="btn btn-lg btn-block text-uppercase btn-login" type="submit">Kirjaudu</button>
                                        <div className='row mt-4 mb-3'>
                                            <div className="col"><hr /></div>
                                            <div className='col align-items-center align-middle my-auto text-nowrap alt-sign text-center'>tai kirjaudu</div>
                                            <div className="col"><hr /></div>
                                        </div>
                                        <div className='row justify-content-between ml-xl-4 mr-xl-4 ml-0 mr-0'>
                                            <a href="/home"> <i className="fab fa-facebook-f btn-some align-items-center justify-content-center"/></a>
                                            <a href="/home"> <i  className="fab fa-google btn-some align-items-center justify-content-center"/></a>
                                            <a href="/home"> <i  className="fab fa-linkedin btn-some align-items-center justify-content-center"/></a>
                                            <a href="/home"> <i  className="fab fa-twitter btn-some align-items-center justify-content-center"/></a>
                                        </div>
                                        <hr className='my-4' />
                                        <div className='row mt-1'>
                                            <div className='col text-center text-nowrap'>Ei käyttäjätunnusta?</div>
                                            <div className='col text-center'>
                                                <a href='/home' className='link-primary'>Rekisteröidy</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                  
            </div>
        );
    }
}

export default ProfileCard;