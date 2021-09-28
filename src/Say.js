import { useState } from 'react';

function Say() {
    const [message, setMessage] = useState('');
    const onEnter = () => setMessage('안녕 하세요.');
    const onLeave = () => setMessage('안녕히 가세요.');

    return (
        <div>
            <button onClick={onEnter}>입장</button>
            <br />
            <button onClick={onLeave}>퇴장</button>
            <br />
            <br />
            <input type="text" value={message} />
        </div>
    );
}

export default Say;
