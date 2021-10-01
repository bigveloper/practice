import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Intorduce</Link>
                </li>
                <li>
                    <Link to="/profile/WhyJ">WhyJ Profile</Link>
                </li>
                <li>
                    <Link to="/profile/YJ">YJ Profile</Link>
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
