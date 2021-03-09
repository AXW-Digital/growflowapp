import React, { Component } from 'react';
import HeaderHome from '../components/HeaderHome'
import ProfileCard from '../components/ProfileCard'
import SettingsCard from '../components/SettingsCard'

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <section id='profile' className='bg-light'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                    <ProfileCard 
                                    cardTitle = 'Profiili'
                                    birthDate = '01.01.1990'
                                    forename = 'John'
                                    surname = 'Doe'
                                    emailAddress = 'john.doe@email.com'
                                    phoneNumber = '+358 40 123 4567'
                                    memberSince = '01.03.2021'
                                    lastLogin = 'Tänään'
                                    homeCity = 'Helsinki'
                                    homeAddress = 'Vilhonvuorenkatu 12B'
                                    />
                            </div>
                            <div className='col-lg-8'>
                                    <SettingsCard 
                                    Title = 'Asetukset'
                                    BirthDate = '01.01.1990'
                                    Forename = 'John'
                                    Surname = 'Doe'
                                    EmailAddress = 'john.doe@email.com'
                                    PhoneNumber = '+358 40 123 4567'
                                    />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ProfilePage;