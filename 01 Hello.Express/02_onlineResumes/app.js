
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const resumesRouter = require('./routes/resumes');
var app = express();
app.use(logger('dev'));
app.use(express.json());
const aiRouter = require('./routes/ai');
const deltaRouter = require('./routes/delta');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// index:false —— 禁止静态中间件把 public/index.html 当作根路径默认页。
// 否则它会先于路由拦截 "/"，导致下面的重定向永远执行不到（表现为访问根路径只看到 Express 欢迎页）
app.get('/',function(req,res){
    res.redirect('/game/templates/index.html');
});
app.use(express.static(path.join(__dirname, 'public'), { index: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resumes', resumesRouter);
app.use('/api/ai', aiRouter);
app.use('/api/delta', deltaRouter);
app.listen(3000, '0.0.0.0', () => {
    console.log('服务器运行在http://0.0.0.0:3000');
});
module.exports = app;
