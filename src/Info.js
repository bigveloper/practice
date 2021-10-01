import { useEffect, useState } from 'react';

function Info() {
    // state
    const [name, setName] = useState('');
    const [nikname, setNikname] = useState('');

    // event
    const onChangeName = (e) => setName(e.target.value);
    const onChangeNikName = (e) => setNikname(e.target.value);

    useEffect(() => {
        console.log(name);
        console.log(nikname);
    }, [name, nikname]);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nikname} onChange={onChangeNikName} />
            </div>
            <div>
                <b> name: {name} </b>
                <br />
                <b> nikname: {nikname}</b>
            </div>
        </div>
    );
}

export default Info;
