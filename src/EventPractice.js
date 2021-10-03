import { useState, useEffect } from 'react';

function EventPractice() {
    // state
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // event
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);

    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    useEffect(() => {
        console.log(username);
        console.log(message);
    }, [username, message]);
    // view
    return (
        <div>
            <h1>이벤트 연습입니다.</h1>
            <input type="text" name="username" value={username} placeholder="사용자명" onChange={onChangeUsername} />
            <input type="text" name="message" value={message} placeholder="아무거나 입력하세요." onChange={onChangeMessage} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;
