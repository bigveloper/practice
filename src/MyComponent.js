function MyComponent(props) {
    return (
        <div>
            내 이름은 {props.name} <br />
            children 값은 {props.children}
        </div>
    );
}
MyComponent.defaultProps = {
    name: 'Keep Going',
};
export default MyComponent;
