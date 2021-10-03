import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>Introduce</h1>
            <p>This Project is React Router basic domo Project</p>
            {showDetail && <p>detail 값을 true 로 설정 하셨군요????</p>}
        </div>
    );
};

export default About;
