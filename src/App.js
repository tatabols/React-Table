import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';
import TableSortable from './containers/TableSortable/TableSortable';
import { Container } from 'semantic-ui-react';

const data = [
  { id: 1, name: 'charles 1', current_age: 4, city: 'sg' },
  { id: 2, name: 'charles 2', current_age: 4, city: 'sg' },
  { id: 3, name: 'charles 3', current_age: 24, city: 'sg' },
  { id: 4, name: 'charles 4', current_age: 42, city: 'sg' },
  { id: 5, name: 'charles 5', current_age: 43, city: 'sg' },
  { id: 6, name: 'charles 6', current_age: 44, city: 'sg' },
  { id: 7, name: 'charles 7', current_age: 46, city: 'sg' },
  { id: 8, name: 'charles 8', current_age: 74, city: 'sg' },
  { id: 9, name: 'charles 9', current_age: 48, city: 'sg' },
  { id: 10, name: 'charles 10', current_age: 94, city: 'sg' },
  { id: 11, name: 'charles 11', current_age: 44, city: 'sg' },
];

const columns = [
  { title: 'Name', field: 'name', isLink: true },
  { title: 'Age', field: 'current_age', isLink: false },
  { title: 'City', field: 'city', isLink: false },
];

const link = {
  baseUrl: 'http://localhost:3000/Contacts/',
  key: 'id',
  newTab: true,
};

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router> */}
      <Container>
        <TableSortable
          dataSource={data}
          columns={columns}
          link={link}
          maxRow={5}
        />
      </Container>
    </div>
  );
}

export default App;
