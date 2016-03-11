var React = require('react');
var ReactDom = require('react-dom');

// 使用 React.createClass 创建一个组件
var HelloComponent = React.createClass({
    // 使用 render 方法自动渲染 DOM
    render: function () {
        return (
            <div className='avatar'></div>
        )
    }
});

module.exports = HelloComponent;