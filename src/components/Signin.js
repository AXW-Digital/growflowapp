import React, { Component } from 'react';
import '../assets/css/index.css'

class Signin extends Component {
    render() {
        return (
            <div class = 'container-fluid d-flex vh-100 vw-100 sign-bg m-0 px-0 pb-5'>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title text-center">Kirjaudu</h5>
                                <form class="form-signin">
                                    <div class="form-label-group">
                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                        <label for="inputEmail">Sähköposti</label>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                        <label for="inputPassword">Salasana</label>
                                    </div>

                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1">Muista minut</label>
                                    </div>
                                    <button class="btn btn-lg btn-block text-uppercase btn-login" type="submit">Kirjaudu</button>
                                    <div class='row mt-4 mb-3'>
                                        <div class="col"><hr /></div>
                                        <div class='col align-items-center align-middle my-auto text-nowrap alt-sign text-center'>tai kirjaudu</div>
                                        <div class="col"><hr /></div>
                                    </div>
                                    <div class='row justify-content-between ml-xl-4 mr-xl-4 ml-0 mr-0'>
                                        <a href="#" class="fab fa-facebook-f btn-some align-items-center justify-content-center"></a>
                                        <a href="#" class="fab fa-google btn-some align-items-center justify-content-center"></a>
                                        <a href="#" class="fab fa-linkedin btn-some align-items-center justify-content-center"></a>
                                        <a href="#" class="fab fa-twitter btn-some align-items-center justify-content-center"></a>
                                    </div>
                                    <hr class = 'my-4'/>
                                    <div class='row mt-1'>
                                        <div class='col text-center text-nowrap'>Ei käyttäjätunnusta?</div>
                                        <div class='col text-center'>
                                            <a href='/signup' class='link-primary'>Rekisteröidy</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Signin;