import { useState } from 'react';

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

    // watch

    // event
    return (
        <>
            <input />
            <button>확인</button>
        </>
    );
}

export default IterationSample;
