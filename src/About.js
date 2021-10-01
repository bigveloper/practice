import qs from 'qs';

function About({ location }) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>Itroduce</h1>
            <p>this project is React Router Basic learning sample project</p>
            {showDetail && <p>detail 값을 true 로 선택하셨군요!</p>}
        </div>
    );
}

export default About;
