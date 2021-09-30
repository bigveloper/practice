import { useState } from 'react';

function EventPractice() {
    // state
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // event
    const onChangeUserName = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);

    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };
    return (
        <div>
            <h1>이벤트를 연습해보자~!</h1>
            <input name="username" value={username} placeholder="이름" onChange={onChangeUserName} />
            <input name="message" value={message} placeholder="메세지" onChange={onChangeMessage} />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;
