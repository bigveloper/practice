import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };

    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <NavLink activeStyle={activeStyle} to="/profiles/whyj">
                    whyj
                </NavLink>
            </ul>
            <ul>
                <NavLink activeStyle={activeStyle} to="/profiles/gildong">
                    gildong
                </NavLink>
            </ul>

            <Route paht="/profiles" exactrender={() => <div>사용자를 선택 해 주세요.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
