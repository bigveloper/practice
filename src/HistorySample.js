import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠날거요?');
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로가기</button>
                <br />
                <button onClick={this.handleGoHome}>홈 으로 가기</button>
            </div>
        );
    }
}

export default HistorySample;
