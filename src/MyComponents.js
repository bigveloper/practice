function MyComponents(props) {
    return (
        <div>
            <h1>안녕하세요 저는 {props.name} 입니다.</h1> <br />
            <h1>드론이 7대 이면 {props.children}</h1>
        </div>
    );
}
MyComponents.defaultProps = {
    name: '기본 이름',
};

export default MyComponents;
