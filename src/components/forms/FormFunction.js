import React from 'react';
import {Form} from 'react-bootstrap';
import kyselyt from '../../assets/js/kyselyt'

function Choices(n) {
    const listItems = kyselyt.map((d) => d.kysymykset);
    const choices = listItems[0];
    const kys = choices.map((d) => d.choices);
    // console.log(kys);
    return kys[n];
  }

  function CreateForm(x) {
      var choices = kyselyt.map((d) => d.kysymykset)[0]
      var type = choices.map((d) => d.type)
    return (
      <Form.Group>
        <Form.Label>{kyselyt.map((d) => d.kysymykset)[0].map((y) => y.title)[x]}</Form.Label>
        {type[x] === 'multi' ? 
        <Form.Control as = 'select' multiple>{Choices(x).map(x => <option>{x}</option>)}</Form.Control> :
        <Form.Control as = 'select' >{Choices(x).map(x => <option>{x}</option>)}</Form.Control>}
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
  


