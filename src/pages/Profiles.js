import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3> User List : </h3>
            <ul>
                <li>
                    <Link to="/profiles/WhyJ">WhyJ</Link>
                </li>
                <li>
                    <Link to="/profiles/YJ">YJ</Link>
                </li>
            </ul>
            <Route path="/profiles" exactrender={() => <div>Select User</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
