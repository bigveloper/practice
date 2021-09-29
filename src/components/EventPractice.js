import { useState, useEffect } from 'react';

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
    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <div>
            <h1>달리고 또 달리고</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} />
            <input type="text" name="message" placeholder="입력하세요." value={message} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice;
