import { useState } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'snowman' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'snow' },
        { id: 4, text: 'wind' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);

    // event
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    // watch

    // view

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
            <ul>{namesList}</ul>;
        </>
    );
}

export default IterationSample;
