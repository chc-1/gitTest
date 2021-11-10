const koa = require('koa');
const app = new koa();
const Router = require('koa-router')
const router = new Router();
router.get('/hello',(ctx,next)=>{
	ctx.body = {code:1,message:'请求成功',query:ctx.request.query,querystring:ctx.request.querystring}
})
app
.use(router.routes())
app.listen(3000,()=>{
	console.log('server is running at http://localhost:3001')
})