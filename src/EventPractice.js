import { useState, useEffect } from 'react';

function EventPractice() {
    // state
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;
    // event
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username: '',
            message: '',
        });
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
    return (
        <div>
            <h1>이벤트를 연습해보자~!</h1>
            <input type="text" name="username" value={username} placeholder="이름" onChange={onChange} />
            <input type="text" name="message" value={message} placeholder="메세지" onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;
