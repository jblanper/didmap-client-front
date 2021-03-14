import React from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function SearchResult(props) {
    const uri = props.data.uri.split('/').slice(-2).join('/');

    return (
        <Card className="mt-2   ">
            <Card.Body>
                <Card.Title className="d-flex justify-content-between mb-0">
                    <span className="text-primary">{props.data.label}</span>
                    <small className="text-black-50">{props.data.created.split('T')[0]}</small>
                </Card.Title>
                <Card.Text><small><a className="text-black-50" href={props.data.uri} target="_blank">(ver en Didactalia.net)</a></small></Card.Text>
                <Card.Text>
                    Autor: {props.data.has_creator}
                    <Link to={`/map/${uri}`}>
                        <Button type="button" className="float-right">
                            Inspeccionar
                        </Button>
                    </Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer><small className="text-black-50">Tags: {props.data.topic.join(', ')}</small></Card.Footer>
        </Card>
    );
}