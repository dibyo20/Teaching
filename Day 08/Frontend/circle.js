const Circle = () => {
    return React.createElement('div', { className: 'circle' }, [
        React.createElement('div', { className: 'circle__inner' }, "This is inner circle")
    ]);
}

export default Circle;