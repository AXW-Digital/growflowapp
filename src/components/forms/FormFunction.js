import React from 'react';
import {Form} from 'react-bootstrap';
import kyselyt from '../../assets/js/kyselyt'

function Choices(n) {
    const listItems = kyselyt.map((d) => d.kysymykset);
    const choices = listItems[0];
    const kys = choices.map((d) => d.choices);
    console.log(kys);
    return kys[n];
  }

  function CreateForm(x) {
    return (
      <Form.Group>
        <Form.Label>{kyselyt.map((d) => d.kysymykset)[0].map((y) => y.title)[x]}</Form.Label>
        <select>{Choices(x).map(x => <option>{x}</option>)}</select>
        </Form.Group>
    );
  }

  function CreateKysely() {
    const listItems = kyselyt.map((d) => d.kysymykset);
    const choices = listItems[0];
    const kys = choices.map((d) => d.choices);
    const items = [];
    var i;
    for (i = 0; i < kys.length; i++) {
      items.push(CreateForm(i));
    }
    return items;
}

export default function FormFunction() {
    return CreateKysely(Choices);
}
  


