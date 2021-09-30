function MyComponent({ name, children }) {
    return (
        <div>
            내 이름은 {name} <br />
            children 값은 {children}
        </div>
    );
}
MyComponent.defaultProps = {
    name: 'Keep Going',
};
export default MyComponent;
