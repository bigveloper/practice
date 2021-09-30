import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <Link to="/profiles/whyj">whyj</Link>
            </ul>
            <ul>
                <Link to="/profiles/gildong">gildong</Link>
            </ul>

            <Route paht="/profiles" exactrender={() => <div>사용자를 선택 해 주세요.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
