var React = require('react');
var ReactDom = require('react-dom');
require('../less/header.less');

// 使用 React.createClass 创建一个组件
var Header = React.createClass({
    // 使用 render 方法自动渲染 DOM
    render: function () {
        return (
            <ul className='nav'>
                <li>首页</li>
                <li>众筹</li>
                <li>演出</li>
                <li>合作</li>
            </ul>
        )
    }
});

module.exports = Header;
