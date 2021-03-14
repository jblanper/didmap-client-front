import { React, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const mapThemes = {
    physical: [
        ['relief', 'Relieve'],
        ['rivers', 'Ríos'],
        ['costs', 'Costas'],
        ['lakes', 'Lagos'],
        ['oceans', 'Océanos'],
        ['peninsulas', 'Penínsulas'],
        ['islands', 'Islas'],
        ['volcanoes', 'Volcanes'],
        ['deserts', 'Desiertos'],
    ],
    political: [
        ['countries', 'Países'],
        ['autonomous_communities', 'Comunidades Autónomas'],
        ['provinces', 'Provincias'],
        ['continents', 'Continentes'],
        ['european_union', 'Unión Europea'],
        ['capitals', 'Capitales'],
        ['comarcas', 'Comarcas'],
        ['states', 'Estados'],
        ['departments', 'Departamentos'],
        ['regions', 'Regiones'],
        ['districts', 'Distritos'],
        ['territories', 'Territorios'],
        ['prefectures', 'Prefecturas'],
        ['cities', 'Ciudades'],
        ['olympic_games', 'Juegos Olímpicos'],
    ],
    other: [
        ['maps_of_demonyms', 'Mapas de gentilicios'],
        ['environmental_maps', 'Mapas ambientales'],
        ['natural_areas', 'Áreas naturales'],
        ['climate', 'Clima'],
        ['historical_maps', 'Mapas históricos'],
        ['ancient_maps', 'Mapas antiguos'],
        ['archaeological_maps', 'Mapas arqueológicos'],
        ['historical_milestones', 'Hitos históricos'],
        ['battles', 'Batallas'],
        ['gastronomic_maps', 'Mapas gastronómicos'],
        ['tourist_maps', 'Mapas turísticos'],
        ['traditions', 'Tradiciones'],
        ['cultural_heritage', 'Patrimonio cultural'],
        ['entertainment', 'Ocio'],
    ],
}

export default function SearchForm(props) {
    const [mapType, setMapType] = useState('physical');

    const handleMapTypeChange = (event) => {
        setMapType(event.target.value);
    };

    return (
        <Form noValidate validated={props.validated} onSubmit={props.onSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="mapType">
                    <Form.Label>Tipo de mapa</Form.Label>
                    <Form.Control as="select" custom onChange={handleMapTypeChange}>
                        <option value="physical">Mapas físicos</option>
                        <option value="political">Mapas políticos</option>
                        <option value="other">Otros mapas</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="mapTheme">
                    <Form.Label>Tema del mapa</Form.Label>
                    <Form.Control as="select" custom>
                        {mapThemes[mapType].map(type => <option key={type[0]} value={type[0]}>{type[1]}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="gameType">
                    <Form.Label>Tipo de juego</Form.Label>
                    <Form.Control as="select" custom>
                        <option value="">-</option>
                        <option value="where_is">¿Dónde está?</option>
                        <option value="whats_the_name">¿Cómo se llama?</option>
                        <option value="puzzle">Puzzle</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="continent">
                    <Form.Label>Continente</Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder="Europa"
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="country">
                    <Form.Label>País</Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder="España"
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="region">
                    <Form.Label>Región</Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder="Navarra"
                    />
                </Form.Group>
            </Form.Row>
            <Button type="submit" className="float-right">
                Buscar
            </Button>
            {props.loading?<Spinner as="span" animation="border" role="status" variant="primary" className="mr-3 float-right">
                <span className="sr-only">Cargando...</span>
            </Spinner>:''}
        </Form>
    );
}