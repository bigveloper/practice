import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

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
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
        </div>
    );
}

export default App;
