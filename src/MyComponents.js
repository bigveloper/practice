function MyComponents({ name, children }) {
    return (
        <div>
            <h1>안녕하세요 저는 {name} 입니다.</h1> <br />
            <h1>7개의 드런이 모였다. {children}</h1>
        </div>
    );
}
MyComponents.defaultProps = {
    name: '기본 이름',
};

export default MyComponents;
