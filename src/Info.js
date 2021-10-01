import { useReducer, useEffect } from 'react';

// state
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

function Info() {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nikname: '',
    });
    const { name, nikname } = state;
    const onChange = (e) => {
        dispatch(e.target);
    };
    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nikname" value={nikname} onChange={onChange} />
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
