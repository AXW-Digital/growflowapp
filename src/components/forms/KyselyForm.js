import React, { Component } from 'react'
import FormFunction from './FormFunction'
import {Form} from 'react-bootstrap'

export default class KyselyForm extends Component {
    render() {
        return (
            <Form>
                <FormFunction question = {0}/>
            </Form>
        )
    }
}
