function MyComponents(props) {
    return (
        <div>
            <h1>안녕하세요 저는 {props.name} 입니다.</h1>;
        </div>
    );
}
MyComponents.defaultprops = {
    name: '기본 이름',
};

export default MyComponents;
