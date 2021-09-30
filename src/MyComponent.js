import PropTypes from 'prop-types';

function MyComponent({ name, favoriteNumber, children }) {
    return (
        <div>
            내 이름은 {name} <br />
            children 값은 {children}
            <br />
            내가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
}
MyComponent.defaultProps = {
    name: 'Keep Going',
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
