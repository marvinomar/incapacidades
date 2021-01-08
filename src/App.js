import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aux from './Hoc/Auxiliary';
import EmployeesDashboard from './Components/Employees/EmployeesDashboard/EmployeesDashboard';
import Employee from './Components/Employees/Employee/Employee';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Aux>
          <header>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Aqui la navbar</Navbar.Brand>
            </Navbar>
          </header>
          <main>
            <Container className="mt-3">
              <Switch>
                <Route path="/" exact component={EmployeesDashboard} />
                <Route path="/:id" exact component={Employee} />
              </Switch>
            </Container>
          </main>
        </Aux>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
