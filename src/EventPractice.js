import { useState } from 'react';

const EventPractice = () => {
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

    // watch

    // view

    return (
        <div>
            <h1> 이벤트를 연습해 보자 </h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} />
            <input type="text" name="message" placeholder="아무거나 입력하시오" value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>입력</button>
        </div>
    );
};

export default EventPractice;
