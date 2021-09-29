import { useState, useEffect } from 'react';

const IterationSample = () => {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'snowMan' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'snow' },
        { id: 4, text: 'wind' },
    ]);
    const [inputText, setInfutText] = useState('');
    const [nextId, setNextId] = useState(5);

    // event
    const onChange = (e) => setInfutText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInfutText('');
    };

    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

    // watch
    useEffect(() => {
        console.log(nameList);
        console.log(names);
    }, [nameList, names]);

    // view
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
