import { useState } from 'react';

function Say() {
    // state
    const [message, setMessage] = useState('');

    // event
    const onClickEnter = () => setMessage('안녕하세요!!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');
    // view
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'aqua' }} onClick={() => setColor('aqua')}>
                aqua
            </button>
            <button style={{ color: 'orange' }} onClick={() => setColor('orange')}>
                orange
            </button>
        </div>
    );
}

export default Say;
