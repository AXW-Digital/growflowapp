import React, { Component } from 'react'
import FormFunction from './FormFunction'
import {Form} from 'react-bootstrap'
import kyselyt from '../../assets/js/kyselyt'

export default class KyselyForm extends Component {
    render() {
        var title = kyselyt.map((d) => d.kyselyTitle)[this.props.question]
        return (
            <div>
            <h3>{title}</h3>
            <Form>
                <FormFunction question = {this.props.question}/>
            </Form>
            </div>
        )
    }
}
