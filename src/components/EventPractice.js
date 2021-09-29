import { useState } from 'react';

function EventPractice() {
    // state
    const [usernmae, setUsername] = useState('');
    const [message, setMessage] = useState('');
    // event
    const onChangeUsernmae = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    const onClick = () => {
        alert(usernmae + ' : ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    //watch

    //view
    return (
        <div>
            <input type="text" value={usernmae} placeholder="사용자명" onChange={onChangeUsernmae} />
            <input type="text" value={message} placeholder="아무거나 입력하세요." onChange={onChangeMessage} onKeyPress={onKeyPress} />
            <button onClick={onClick}>전송</button>
        </div>
    );
}

export default EventPractice;
