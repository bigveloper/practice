import { useState } from 'react';

function Say() {
    const [message, setMessage] = useState('');
    const onEnter = () => setMessage('안녕 하세요.');
    const onLeave = () => setMessage('안녕히 가세요.');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onEnter}>입장</button>
            <br />
            <button onClick={onLeave}>퇴장</button>
            <br />
            <br />
            <input type="text" style={{ color }} value={message} />
            <br />
            <br />
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                RED
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                GREEN
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                BLUE
            </button>
        </div>
    );
}

export default Say;
