import { useState } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'React' },
        { id: 2, text: 'Veu' },
        { id: 3, text: 'HTML' },
        { id: 4, text: 'JavaScript' },
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
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    // view

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </div>
    );
}

export default IterationSample;
