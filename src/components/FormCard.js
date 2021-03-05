import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'



export default class FormCard extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1500,
          once: true
        })
      }
    render() {
        return (
            <div className="col-xl-4 col-md-6 my-3 kysely-col" data-aos="fade-up" data-aos-delay="50">

                <div className={`kysely-card ${this.props.kysely.color}`}>
                    <div className='container-fluid'>
                        <div className='row row-image'>

                                <img className="card-image"
                                    src={this.props.kysely.picUrl}
                                    alt={this.props.kysely.name}
                                />

                        </div>
                        <div className='row row-title'>
                            <h3 className="card-title">{this.props.kysely.formTitle}</h3>
                        </div>
                        <div className='row row-text'>
                            <p className="card-text">{this.props.kysely.formText}</p>
                        </div>
                        <div className='row row-button'>
                            <a href={this.props.kysely.formUrl} className="btn btn-primary btn-card my-auto text-center">{this.props.tyyppi} {this.props.kysely.minutes}</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


