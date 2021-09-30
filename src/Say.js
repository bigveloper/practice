import { useState } from 'react';

function Say() {
    // state
    const [message, setMessage] = useState('');

    // event
    const onClickEnter = () => setMessage('안녕하세요!!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    // view
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
}

export default Say;
