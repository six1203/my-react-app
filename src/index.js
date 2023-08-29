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

// var myStyle = {color: "red", textAlign: "center"}
//
// class Name extends React.Component {
//     render() {
//         return <h1 style={myStyle}>网站名称： {this.props.name}</h1>
//     }
// }
//
// class Url extends  React.Component {
//     render() {
//         return <h1>网站地址：{this.props.url}</h1>
//     }
// }
//
// class Nickname extends React.Component {
//     render() {
//         return <h1>网站用户：{this.props.nickname}</h1>
//     }
// }
//
//
// function App(props) {
//     return (
//         <div>
//             <Name name={props.name}/>
//             <Url url={props.name}/>
//             <Nickname nickname={props.nickname}/>
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <App name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"} />,
//     document.getElementById('example')
// )

// const arr = [
//     <h1>菜鸟教程</h1>,
//     <h2>学的不仅是技术，更是梦想！</h2>
// ];
//
// ReactDOM.render(
//     <div>{arr}</div>,
//     document.getElementById('example')
// )

// class  Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()}
//     }
//
//     componentDidMount() {
//         // this.timerID = setInterval(
//         //     () => this.tick(), 1000
//         // );
//
//         let _this = this;
//         this.timerID = setInterval(function(){
//             _this.tick();
//         }, 1000);
//     }
//
//
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>hello, world</h1>
//                 <h2>现在是{this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }
//
//
// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('example')
// )


// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('链接被点击')
//     }
//
//     return (
//         <a href="#" onClick={handleClick}>点我</a>
//     )
// }
//
// ReactDOM.render(
//     <ActionLink />,
//     document.getElementById('example')
// );

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         console.log('this is:', this);
//         // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />, document.getElementById('example')
// )


class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}

ReactDOM.render(
    <Popper />, document.getElementById('example')
)
