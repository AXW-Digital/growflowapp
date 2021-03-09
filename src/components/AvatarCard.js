import React, { Component } from 'react'

export default class AvatarCard extends Component {
    render() {
        return (
            <div>
               <div className="card profile-card">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="profile-image float-md-right"> <img src="/img/burgerking.jpeg" alt=""/> </div>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <h4 class="m-t-0 m-b-0"><strong>John</strong> Doe</h4>
                                <span class="job_post">Food enthusiast</span>
                                <p>Helsinki</p>
                                <div>
                                    <button class="btn btn-primary btn-round">Follow</button>
                                    <button class="btn btn-primary btn-round btn-simple">Message</button>
                                </div>
                            </div>                
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}
