import { useState } from 'react';

function IterationSample() {
    // state
    const [names, setNames] = useState([
        { id: 1, text: 'React' },
        { id: 2, text: 'Veu' },
        { id: 3, text: 'HTML' },
        { id: 4, text: 'JavaScript' },
    ]);

    const [input, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // event
    const onChange = (e) => setInputText(e.target.value);

    // view

    return (
        <div>
            <input value={value} onChange={onChange} />
            <button>Add</button>
        </div>
    );
}

export default IterationSample;
