import { useState } from 'react';
function IterationSample() {
    const [names, setNames] = useState([
        { id: 1, text: 'Javascript' },
        { id: 2, text: 'React' },
        { id: 3, text: 'Vue' },
        { id: 4, text: 'Wind' },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextid, setNextID] = useState(5);

    const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);

    return (
        <>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;
