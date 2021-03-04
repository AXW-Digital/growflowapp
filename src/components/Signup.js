import React, { Component } from 'react';
import '../assets/css/index.css'

class Signin extends Component {
    render() {
        return (
            <div class='container-fluid d-flex vh-100 vw-100 sign-bg m-0 px-0 pb-5'>
                <div class="container">
                    <div class="row sign-bg">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rekisteröidy</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <input type="text" id="inputName" class="form-control" placeholder="Etunimi" required autofocus />
                                            <label for="inputName">Etunimi</label>
                                        </div>
                                        <div class="form-label-group">
                                            <input type="text" id="inputSName" class="form-control" placeholder="Sukunimi" required autofocus />
                                            <label for="inputSName">Sukunimi</label>
                                        </div>
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Sähköposti</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Salasana</label>
                                        </div>


                                        <button class="btn btn-lg btn-block text-uppercase btn-login mt-5" type="submit">Rekisteröidy</button>
                                        <div class='row mt-4 mb-3'>
                                            <div class="col"><hr /></div>
                                            <div class='col align-items-center align-middle my-auto text-nowrap alt-sign text-center'>tai rekisteröidy</div>
                                            <div class="col"><hr /></div>
                                        </div>
                                        <div class='row justify-content-between ml-xl-4 mr-xl-4 ml-2 mr-2'>
                                            <a href="#" class="fab fa-facebook-f btn-some align-items-center justify-content-center"></a>
                                            <a href="#" class="fab fa-google btn-some align-items-center justify-content-center"></a>
                                            <a href="#" class="fab fa-linkedin btn-some align-items-center justify-content-center"></a>
                                            <a href="#" class="fab fa-twitter btn-some align-items-center justify-content-center"></a>
                                        </div>
                                        <hr class='my-4' />
                                        <div class='row mt-1'>
                                            <div class='col text-center text-nowrap'>Oletko jo käyttäjä?</div>
                                            <div class='col text-center'>
                                                <a href='/signin' class='link-primary'>Kirjaudu</a>
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