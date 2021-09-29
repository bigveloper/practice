import { useState } from 'react';

const IterationSample = () => {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'JavaScript' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Vue' },
        { id: 4, text: 'HTML' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    //event
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
    const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
    //watch

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
