import React, { Component } from 'react'

export default class FormCard extends Component {
    render() {
        return (
            <div>
                
                    <div className="kysely-card blue">
                        <div className='card-image-container'> 
                        <img className="card-image"
                            src={this.props.kysely.picUrl}
                            alt={this.props.kysely.name}
                        />
                        </div>
                        <h3 className="card-title">{this.props.kysely.formTitle}</h3>
                        <p className="card-text">{this.props.kysely.formText}</p>
                        <a href={this.props.kysely.formUrl} className="btn btn-primary btn-card">Vastaa</a>
                    </div>
               

            </div>
        )
    }
}




{/* <div className="card form-card">
<img className="card-img-top"
    src={this.props.kysely.picUrl}
    alt={this.props.kysely.name}
/>
<div className="card-body">
    <h5 className="card-title">{this.props.kysely.formTitle}</h5>
    <p className="card-text">{this.props.kysely.formText}</p>
    <a href={this.props.kysely.formUrl} className="btn btn-primary btn-card">Vastaa</a>
</div>
</div> */}