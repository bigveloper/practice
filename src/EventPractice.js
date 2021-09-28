import { useState, useEffect } from 'react';

function EventPractice() {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;
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
            onClick('');
        }
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <div>
            <h1> 이벤트를 연습 해 보자!!</h1>
            <input type="text" name="username" placeholder="사용자명" onChange={onChange} />

            <input type="text" name="message" placeholder="아무거나 입력하시오." onChange={onChange} onKeyPress={onKeyPress} />

            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;
