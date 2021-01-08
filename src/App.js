import React from 'react';
import {  Container } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aux from './Hoc/Auxiliary';
import EmployeesDashboard from './Components/Employees/EmployeesDashboard/EmployeesDashboard';
import Employee from './Components/Employees/Employee/Employee';
import Menu from './Components/Menu';
import MedicalLeave from './Components/MedicalLeave/index';
const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Aux>
            <header>
              <Menu />
            </header>
            <main>
              <Container className="mt-3">
                <Switch>
                <Route path="/" exact component={EmployeesDashboard} />
                  <Route path="/:id" exact component={Employee} />
                  <Route path="/medical-leave" component={MedicalLeave} />
                  <Route path="/employees"  component={EmployeesDashboard} />
                </Switch>
              </Container>
            </main>
          </Aux>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
