import { useState, useEffect } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'JavaScript' },
        { id: 2, text: 'React' },
        { id: 1, text: 'JSX' },
        { id: 1, text: 'Vue' },
    ]);

    const [inputText, setInputText] = useState('');
    const [nexId, setNextId] = useState(5);

    // event
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nexId,
            text: inputText,
        });
        setNextId(nexId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    // watch
    useEffect(() => {
        console.log(namesList);
    }, [namesList]);

    // event
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;
