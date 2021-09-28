function MyComponents(props) {
    const { name, children } = props;
    return (
        <div>
            <h1>안녕하세요 저는 {name} 입니다.</h1> <br />
            <h1>드런이 7개면 {children}</h1>
        </div>
    );
}
MyComponents.defaultProps = {
    name: '기본 이름',
};

export default MyComponents;
