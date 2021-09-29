import { useState, useEffect } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'JavaScript' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Vue' },
        { id: 4, text: 'HTML' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
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
    useEffect(() => {
        console.log(names);
    }, [names]);

    //view
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
            <ul>{nameList}</ul>
        </>
    );
}

export default IterationSample;
