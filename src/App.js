import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import Aux from './Hoc/Auxiliary';

function App() {
  return (
    <Aux>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Aqui la navbar</Navbar.Brand>
        </Navbar>
      </header>
      <main>
        <Container>
          aqui va el contenido
        </Container>
      </main>
    </Aux>
  );
}

export default App;
