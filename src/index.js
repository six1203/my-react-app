import React from 'react';
import ReactDOM from 'react-dom';

// function Hello(props) {
//     return <h1>Hello World!</h1>;
// }
//
// ReactDOM.render(<Hello />, document.getElementById('root'));

// const element = <h1>Hello，World!!</h1>
//
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// )
//
// ReactDOM.render(
//     element,
//     document.getElementById("example")
// )


// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, World</h1>
//             <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element, document.getElementById('example')
//     );
// }
//
// setInterval(tick, 1)


// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, World！</h1>
//             <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
//
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}/>,
//         document.getElementById('example')
//     );
// }
//
// setInterval(tick, 1)

// class Clock extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>Hello, World！</h1>
//             <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
//         </div>)
//
//     };
// }
//
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('example')
//     )
// }
// setInterval(tick, 1);

var myStyle = {color: "red", textAlign: "center"}

class Name extends React.Component {
    render() {
        return <h1 style={myStyle}>网站名称： {this.props.name}</h1>
    }
}

class Url extends  React.Component {
    render() {
        return <h1>网站地址：{this.props.url}</h1>
    }
}

class Nickname extends React.Component {
    render() {
        return <h1>网站用户：{this.props.nickname}</h1>
    }
}


function App(props) {
    return (
        <div>
            <Name name={props.name}/>
            <Url url={props.name}/>
            <Nickname nickname={props.nickname}/>
        </div>
    )
}


ReactDOM.render(
    <App name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"} />,
    document.getElementById('example')
)