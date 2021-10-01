import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
                {/* <li>
                    <Link to="/profile/WhyJ">WhyJ Profile</Link>
                </li>
                <li>
                    <Link to="/profile/YJ">YJ Profile</Link>
                </li> */}
                <li>
                    <Link to="/profiles"> PROFILE </Link>
                </li>
                <li>
                    <Link to="/historysample"> HistorySample </Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
            {/* <Route path="/profile/:username" component={Profile} /> */}
            <Route path="/profiles" component={Profiles} />
            <Route path="/historysample" component={HistorySample} />
        </div>
    );
}

export default App;
