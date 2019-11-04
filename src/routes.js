import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Book from './pages/Book';

const Routes = createAppContainer (
    createSwitchNavigator({
        Login,
        Home,
        Book
    })
);

export default Routes;