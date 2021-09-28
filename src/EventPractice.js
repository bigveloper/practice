import { useState, useEffect } from 'react';

function EventPractice() {
    // state
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    // event
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    //watch
    useEffect(() => {
        console.log(username);
    }, [username]);

    useEffect(() => {
        console.log(message);
    }, [message]);

    // view
    return (
        <div>
            <h1>이벤트 연습하기!!</h1>
            <input type="text" name="username" placeholder="사용자명" onChange={onChangeUsername} />
            <br />
            <input type="text" name="message" placeholder="아무거나 입력하시오." onChange={onChangeMessage} onKeyPress={onKeyPress} />
            <br />
            <button onClick={onClick}>확인</button>
        </div>
    );
}
export default EventPractice;
