import PropTypes from 'prop-types';

function MyComponents({ name, children, favoriteNumber }) {
    return (
        <div>
            <h1>안녕하세요 저는 {name} 입니다.</h1> <br />
            <h1>7개의 드런이 모였다. {children}</h1> <br />
            <br />
            <h1>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</h1>
        </div>
    );
}
MyComponents.defaultProps = {
    name: '기본 이름',
};

MyComponents.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponents;
