var React = require('react');
var ReactDom = require('react-dom');

var Header = require('../layout/header/js/header.js');
ReactDom.render((<Header/>),document.getElementById('nav'));

var HelloComponent = require('./js/hello.js');
require('./less/index.less');

$(function(){
    $('#demo').text('加载中...');
});

setTimeout(function(){
    // 1秒后将组件插入到网页中指定的位置
    ReactDom.render(
        (
            <div className='here'>
                <HelloComponent/>
                <img src={require("./img/footer.jpg")} />
            </div>
        ),
        document.getElementById('demo')
    )
},1000)