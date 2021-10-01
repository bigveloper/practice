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

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextid,
            text: inputText,
        });
        setNextID(nextid + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemeve = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemeve(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>확인</button>
            <ul>{namesList}</ul>
        </>
    );
}

export default IterationSample;
