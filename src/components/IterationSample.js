import { useState } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'JavaScript' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Veu' },
        { id: 4, text: 'HTML' },
        { id: 5, text: 'CSS' },
        { id: 6, text: 'GO' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(7);
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
        const nextName = names.filter((name) => name.id !== id);
        setNames(nextName);
    };
    // watch

    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    //view
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>저장</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;
