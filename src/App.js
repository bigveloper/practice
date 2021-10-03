import './App.css';

function App() {
    const name = '리액트';
    return <div>{name === '리액트' ? <h1>잘해보자</h1> : <h2>못해보자</h2>}</div>;
}

export default App;
