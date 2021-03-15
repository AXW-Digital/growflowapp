import React, { Component } from 'react'
import KyselyForm from '../components/forms/KyselyForm'
import Header from '../components/parts/HeaderHome';
import Footer from '../components/parts/Footer'


export default class KyselyPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id='page-top'> </div>
                <section id='kysely' className='bg-light'>
                    <div className='container'>
                        <KyselyForm/>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
