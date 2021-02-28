import RegisterContainer from '../containers/Register';
import ContactContainer from '../containers/Contacts';
import CreateContactContainer from '../containers/CreateContact';
import LoginContainer from '../containers/Login';
import TableSortable from '../containers/TableSortable/TableSortable';

const routes = [
  {
    path: '/auth/register',
    component: RegisterContainer,
    title: 'Register',
  },
  {
    path: '/auth/login',
    component: LoginContainer,
    title: 'Login',
  },
  {
    path: '/',
    component: ContactContainer,
    title: 'Contacts',
  },
  {
    path: '/contacts/create',
    component: CreateContactContainer,
    title: 'Create Contact',
  },
  {
    path: '/table',
    component: TableSortable,
    title: 'Table',
  },
];

export default routes;
