import { useState } from 'react';

const IterationSample = () => {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'Sony' },
        { id: 2, text: 'Cannon' },
        { id: 3, text: 'Nikon' },
        { id: 4, text: 'Panasonic' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    // event
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNames(nextNames);
        setNextId(nextId + 1);
        setInputText('');
    };

    // watch

    const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
    //view
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>확인</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;
