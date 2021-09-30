import { Link, Route } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
// import Profile from './Profile';
import Profiles from './Profiles';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                {/* <li>
                    <Link to="/profile/whyj">whyj 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li> */}
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">History 예제</Link>
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
};

export default App;
