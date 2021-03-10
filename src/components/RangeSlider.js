import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import { Form, Col, Row } from 'react-bootstrap'

const SliderWithLabel = () => {

    const [value, setValue] = React.useState(50);

    return (
        <Form>
            <Form.Label>
                <p>
                    Menutestien maksimietäisyys
                </p>
            </Form.Label>
            <Form.Group as={Row}>
                <Col xs="9">
                    <RangeSlider
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        step={10}
                        min={20}
                        max={300}
                    />
                </Col>
                <Col xs="3">
                    <Form.Control value={value} />
                </Col>
            </Form.Group>
        </Form>
    );
};

export default SliderWithLabel


