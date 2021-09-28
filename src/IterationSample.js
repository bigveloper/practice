const IterationSample = () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map((num) => num * num);
    console.log(result);

    return (
        <ul>
            <li>{result}</li>
            <li>얼음</li>
            <li>눈</li>
            <li>바람</li>
        </ul>
    );
};

export default IterationSample;
