import React, { Component } from 'react';
import HeaderHome from '../components/HeaderHome'
import ProfileCard from '../components/ProfileCard'

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <section id='profile' className='bg-light'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-4'>
                                    <ProfileCard />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProfilePage;