import React from 'react';
import './header.less';
import './progress.less';

let Progress = React.createClass({
    getDefaultProps() {
        return {
            barColor: '#2f9842'
        };
    },
    changeProgress(e) {
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
        this.props.onProgressChanged && this.props.onProgressChanged(progress);
    },
    render() {
        return (
            <div 
            className="components-progress"
            onClick={this.changeProgress}
            ref="progressBar"
            >
                <div 
                style={{width:`${this.props.progress}%`,background:this.props.barColor}}
                className="progress"
                >
                </div>

            </div>
        );
    }
});

export default Progress;