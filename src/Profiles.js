import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to="/profiles/WhyJ">WhyJ</Link>
                </li>
                <li>
                    <Link to="/profiles/YJ">YJ</Link>
                </li>
            </ul>

            <Route path="/profiles" exactrender={() => <div>사용자를 선택해 주소서</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;
