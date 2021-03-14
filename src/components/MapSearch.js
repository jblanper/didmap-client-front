import { React, useState } from "react";

import axios from "axios";

import SearchForm from './SearchForm.js';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import SearchResult from './SearchResult.js';

export default function MapSearch() {

    const [validated, setValidated] = useState(false);
    const [mapcollection, setMapcollection] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        active: false, variant: '', text: ''
    });

    const  handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setLoading(true);

        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const queryParams = `map_type=${form['mapTheme'].value}&continent=${form['continent'].value}&country=${form['country'].value}&region=${form['region'].value}&game_tyep=${form['gameType'].value}`;

            try {
                const result = await axios.get(`http://localhost:8000/mapcollection/?${queryParams}`);
                setMapcollection(result.data.data);
                setAlert({
                    active: true, 
                    variant:(result.data.results > 0) ? 'success' : 'warning',
                    text: `Se han encontrado ${result.data.results} mapas`,
                    url: result.data.url
                })
            } catch(error) {
                setMapcollection([]);
                setAlert({
                    active: true, 
                    variant:'danger',
                    text: 'No se ha encontrado ningún mapa de esas características'
                })
            }

            setValidated(null);
        }
        setLoading(false);

    };

    return (
        <Container className="mb-2">
            <Card className="mt-3">
                <Card.Header as="h3" className="text-center">Buscador de mapas</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center pb-3">¿Qué quieres aprender?</Card.Title>
                    <SearchForm 
                        className="pt-5" 
                        onSubmit={handleSubmit}
                        validated={validated}
                        loading={loading}
                    ></SearchForm>
                </Card.Body>
            </Card>
            {alert.active?<Alert className="my-2 text-center" variant={alert.variant}>
                {alert.text}<br></br><small><Alert.Link href={alert.url}>Ver en la página de Didactalia</Alert.Link></small>
            </Alert>:''}
            {mapcollection.map((mapItem, i) => {
                return (<SearchResult key={i} data={mapItem}></SearchResult>);
            })}
            
        </Container>
    );   
}