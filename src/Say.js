import { useState } from 'react';

function Say() {
    // state
    const [message, setMessage] = useState('');

    // event
    const onClickEnter = () => setMessage('어서오세요!!');
    const onClickLeave = () => setMessage('어서가세요!!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장!!</button>
            <button onClick={onClickLeave}>퇴장!!</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                RED
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                RED
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                RED
            </button>
        </div>
    );
}

export default Say;
