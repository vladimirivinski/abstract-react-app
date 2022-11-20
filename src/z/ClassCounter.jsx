import React from 'react';

// Классовый подход
class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // потеря контекста
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                {/* переменная получает данные из state */}
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

export default ClassCounter;
