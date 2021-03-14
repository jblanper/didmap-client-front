import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DbpediaContinentResult(props) {
    return (
        <Card className="mt-2">
            <Card.Header as="h4" className="text-center mb-0">
                Información de DBpedia sobre {props.data?.continentLabel}
            </Card.Header>
            <Card.Body>
                <Card.Text className="text-center">
                    {props.loading ? (<Spinner animation="grow" size="sm" variant="primary"/>) : (<a href={props.data?.continent} className="text-black-50" target="_blank">{'(ver en Dbpedia.com)'}</a>)}
                </Card.Text>
                <Row className="pt-3">
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Continente: {props.data?.continentLabel}</ListGroup.Item>
                            <ListGroup.Item>Población: {props.data?.population}</ListGroup.Item>
                            <ListGroup.Item>Zona horaria: {props.data?.time_z}</ListGroup.Item>
                            <ListGroup.Item>Número de WikiLinks: {props.data?.n_wikilinks}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Enlaces relevantes:
                                {(props.data) 
                                    ? (<ul class="list-unstyled">
                                        {props.data.external_links.slice(0, 5).map((link, i) => {
                                            return (<li key={i} ><small><a href={link} target="_blank">{link}</a></small></li>);
                                        })} 
                                    </ul>)
                                    : 'Sin informacion'}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
