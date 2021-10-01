import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/WhyJ">
                        WhyJ
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/YJ">
                        YJ
                    </NavLink>
                </li>
            </ul>

            <Route path="/profiles" exactrender={() => <div>사용자를 선택해 주소서</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;
