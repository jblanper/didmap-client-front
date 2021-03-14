import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import MapSearch from './components/MapSearch.js'
import MapView from './components/MapView.js'

export default function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to='/'><Navbar.Brand>Didmap API Client</Navbar.Brand></Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Realizado por <a className="text-info" href="https://github.com/jblanper" target="_blank">José Blanco</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/map/:title/:id">
          <MapView />
        </Route>
        <Route path="/">
          <MapSearch />
        </Route>
      </Switch>
    </Router>
  );
}