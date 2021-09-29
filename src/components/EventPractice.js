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
    // watch

    // view
    return (
        <div>
            <h1>달려 또 달려!!</h1>
            <input type="text" name="username" value={username} placeholder="사용자이름" onChange={onChange} />
            <input type="text" name="message" value={message} placeholder="아무거나 입력하세요." onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>저장</button>
        </div>
    );
}

export default EventPractice;
