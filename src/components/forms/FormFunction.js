import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import kyselyt from '../../assets/js/kyselyt'
import { SliderReview } from '../parts/RangeSlider'

function Choices(n, q) {
    const listItems = kyselyt.map((d) => d.kysymykset);
    const choices = listItems[q];
    const kys = choices.map((d) => d.choices);
    return kys[n];
}

function CreateForm(x, q) {
    var choices = kyselyt.map((d) => d.kysymykset)[q]
    var type = choices.map((d) => d.type)[x]
    var min = choices.map((d) => d.min)[x]
    var max = choices.map((d) => d.max)[x]
    console.log(min, max)
    return (
        <Form.Group>
            <Form.Label>{kyselyt.map((d) => d.kysymykset)[q].map((y) => y.title)[x]}</Form.Label>
            {
                type === 'multi' ?  <Form.Control as='select' multiple htmlSize={Choices(x, q).length}>{Choices(x, q).map(x => <option>{x}</option>)}</Form.Control> :
                type === 'single' ? <Form.Control as='select' >{Choices(x, q).map(x => <option>{x}</option>)}</Form.Control> :
                type === 'range' ? <SliderReview min = {min} max = {max} />:
                <Form.Control as='textarea' ></Form.Control>
            }
        </Form.Group>
    );
}

function CreateKysely(q) {
    const listItems = kyselyt.map((d) => d.kysymykset);
    const choices = listItems[q];
    const kys = choices.map((d) => d.choices);
    const items = [];
    var i;
    for (i = 0; i < kys.length; i++) {
        items.push(CreateForm(i, q));
    }
    return items;
}


export default class FormFunction extends Component {
    render() {
        return (
            <div>
                {CreateKysely(this.props.question)}
            </div>
        )
    }
}







