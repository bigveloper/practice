import { useState } from 'react';

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
    return (
        <div>
            <h1> 이벤트 연습 </h1>
            <input type="text" name="username" placeholder="사용자이름" value={username} onChange={onChange} />
            <input type="text" name="message" placeholder="무엇이든 입력하시오." value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>저장</button>
        </div>
    );
}

export default EventPractice;
