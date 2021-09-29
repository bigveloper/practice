import { useState } from 'react';

function IterationSample() {
    const names = ['JavaScript', 'React', 'Vue', 'HTML'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);

    return <ul>{nameList}</ul>;
}

export default IterationSample;
