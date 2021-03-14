import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DbpediaCountryResult(props) {
    return (
        <Card className="mt-2">
            <Card.Header as="h4" className="text-center mb-0">
                Información de DBpedia sobre {props.data?.countryLabel}
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-center">
                    <a href={props.data?.country} className="text-black-50" target="_blank">{'(ver en Dbpedia.com)'}</a>
                </Card.Text>
                <Row className="pt-3">
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item>País: {props.data?.countryLabel}</ListGroup.Item>
                            <ListGroup.Item>Capital: {props.data?.capital}</ListGroup.Item>
                            <ListGroup.Item>Población: {props.data?.population}</ListGroup.Item>
                            <ListGroup.Item>Zona horari: {props.data?.time_zone}</ListGroup.Item>
                            <ListGroup.Item>Código de teléfono: {props.data?.tel_code}</ListGroup.Item>
                            <ListGroup.Item>Divisa: {props.data?.currency}</ListGroup.Item>
                            <ListGroup.Item>Número de WikiLinks: {props.data?.n_wikilinks}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Enlaces relevantes:
                                {((props.data) 
                                    ? (<ul class="list-unstyled">
                                        {props.data.external_links.slice(0, 7).map((link, i) => {
                                            return (<li key={i} ><small><a href={link} target="_blank">{link}</a></small></li>);
                                        })} 
                                    </ul>)
                                    : 'Sin informacion')}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
