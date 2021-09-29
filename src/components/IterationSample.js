import { useState } from 'react';

const IterationSample = () => {
    //state
    const [names, setNames] = useState([
        { id: 1, text: 'JavaScript' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Veu' },
        { id: 4, text: 'HTML' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // event
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextName = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextName);
        setInputText('');
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    //

    // view
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>확인</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;
