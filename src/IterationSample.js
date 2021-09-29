import { useState } from 'react';

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

    // watch

    //view
    return <ul>{nameList}</ul>;
}

export default IterationSample;
