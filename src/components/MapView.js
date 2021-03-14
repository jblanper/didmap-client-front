import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import DbpediaContinentResult from './DbpediaContinentResult.js';
import DbpediaCountryResult from './DbpediaCountryResult.js';

export default function MapView() {
    const {title, id} = useParams();
    const [mapInfo, setMapInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true)
        try {
            const result = await axios.get(`http://localhost:8000/map/?map_path=${title}/${id}`);
            setMapInfo(result.data);
        } catch(error) {
            setMapInfo({});
        }
        setLoading(false);
    }, [])

    return (
        <Container className="mb-2">
            <Card className="mt-2">
                <Card.Header as="h3" className="text-center mb-0">
                    {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : mapInfo.label}
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-center">
                        {loading ? <Spinner animation="grow" size="sm" variant="primary"/> 
                        :(<a href={mapInfo.url} className="text-black-50" target="_blank">(ver en Didactalia.net)</a>)}
                    </Card.Text>
                    <Row className="pt-3">
                        <Col>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Autor: {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : mapInfo.creator}</ListGroup.Item>
                                <ListGroup.Item>Tipo de mapa: {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : mapInfo.mapType}</ListGroup.Item>
                                <ListGroup.Item>Continente (geonames): {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : ((mapInfo.continent !== 'None') ? (<a href={mapInfo.continent} target="_blank">{mapInfo.continent}</a>) : 'Sin informacion')}</ListGroup.Item>
                                <ListGroup.Item>País (geonames): {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : ((mapInfo.country !== 'None') ? (<a href={mapInfo.country} target="_blank">{mapInfo.country}</a>) : 'Sin informacion')}</ListGroup.Item>
                                <ListGroup.Item>Centro del mapa: {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : `${mapInfo.latMapCenter}° lat - ${mapInfo.longMapCenter}° long`}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            {loading 
                                ? <div className="w-100 pt-5 d-flex justify-content-center">
                                    <Spinner animation="grow" size="lg" variant="primary"/> 
                                </div>
                                : <Card.Img variant="top" src={mapInfo.image} />}
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <small className="text-black-50">Tags: {loading ? <Spinner animation="grow" size="sm" variant="primary"/> : ((mapInfo.tags) ? mapInfo.tags.join(', ') : 'Sin informacion')}</small>
                </Card.Footer>
            </Card>
            {loading
                ? <div className="w-100 pt-5 d-flex justify-content-center">
                    <Spinner animation="grow" size="lg" variant="primary"/> 
                </div>
                : [mapInfo.country_data ? <DbpediaCountryResult loading={loading} data={mapInfo.country_data}></DbpediaCountryResult> : '',
                mapInfo.continent_data ? <DbpediaContinentResult loading={loading} data={mapInfo.continent_data}></DbpediaContinentResult> : '']
            }
            <Link to='/'>
                <Button type="button" className="float-right my-2">
                    Volver a buscar
                </Button>
            </Link>
        </Container>
    );
}