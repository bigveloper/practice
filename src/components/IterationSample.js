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

    // watch

    // view
    return <ul>{namesList}</ul>;
}

export default IterationSample;
