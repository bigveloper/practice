import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
    return (
        <div>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
