import { useState } from 'react';

function Say() {
    // state
    const [message, setMessage] = useState('');

    // event
    const onClickEnter = () => setMessage('어서오세요!!');
    const onClickLeave = () => setMessage('어서가세요!!');

    return (
        <div>
            <button onClick={onClickEnter}>입장!!</button>
            <button onClick={onClickLeave}>퇴장!!</button>
            <h1>{message}</h1>
        </div>
    );
}

export default Say;
