import React from 'react';
import Header from './components/header';
import Progress from './components/progress';

let duration = null;
let Root = React.createClass({
    getInitialState() {
        return {
            progress: '-'
        }
    },
    componentDidMount() {
        $('#player').jPlayer({
            ready: function() {
                $('#player').jPlayer('setMedia', {
                    mp3: 'http://so1.111ttt.com:8282/2017/4/05m/10/298101104389.m4a?tflag=1503929879&pin=1bb236c57bd45dc7e12f1118c862a738&ip=123.139.41.61#.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
        $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    },
    componentWillUnMount() {
        $('#player').unbind($.jPlayer.event.timeupdate);
    },
    onProgressChangedHandler(progress) {
        $('#player').jPlayer('play', duration*progress);
    },
    render() {
        return (
            <div>
                <Header />
                <div id="player"></div>
                <Progress 
                progress={this.state.progress} 
                onProgressChanged={this.onProgressChangedHandler}
                barColor='#ff0000'
                />
            </div>
        );
    }
});

export default Root;