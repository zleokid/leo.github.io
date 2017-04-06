var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(require('body-parser').urlencoded({extended: true}))
app.use('/static', express.static('bower_components'));
// app.use(express.static(path.join(__dirname, 'bower_componemts')))
app.listen(port)

console.log('imooc started on port ' + port)

// index page
app.get('/', function(req, res) {
    res.render('index', {
		title: 'imooc 首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}, {
			title: '机械战警',
			_id: 2,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}, {
			title: '机械战警',
			_id: 3,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}, {
			title: '机械战警',
			_id: 4,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}, {
			title: '机械战警',
			_id: 5,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}, {
			title: '机械战警',
			_id: 6,
			poster: 'https://ss2.baidu.com/6OV1bjeh1BF3odCf/it/u=1547347907,2224273665&fm=20'
		}]
	})
})

// detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title: 'imooc 详情页'
	})
})

// admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title: 'imooc 后台录入页'
	})
})

// list page
app.get('/admin/list', function(req, res){
	res.render('list', {
		title: 'imooc 列表页'
	})
})
