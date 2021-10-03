import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import './App.css';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/profile/WhyJ">WhyJ's Profile</Link>
                </li>
                <li>
                    <Link to="/profile/YJ">YJ's Profile</Link>
                </li>
            </ul>

            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
}

export default App;
