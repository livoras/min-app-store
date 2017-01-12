import Router from 'koa-router'

export default class CustomRouter extends Router {
  get (path, fn) {
    super.get(path, this.wrap(fn))
  }

  post (path, fn) {
    super.post(path, this.wrap(fn))
  }

  put (path, fn) {
    super.put(path, this.wrap(fn))
  }

  delete (path, fn) {
    super.delete(path, this.wrap(fn))
  }

  wrap (fn) {
    return async (ctx) => {
      try {
        const ret = await fn(ctx)
        ctx.status = 200
        ctx.body = {
          requestId: ctx.state.requestId,
          data: ret
        }
      } catch (e) {
        if (e.name === 'ValidationError') {
          ctx.status = 401
          ctx.body = {
            error: '参数验证错误',
            message: e.errors || e.message
          }
        } else {
          // More error handling
          ctx.status = e.status || 500
          ctx.body = {
            error: '服务器未知异常',
            message: e.message || e
          }
        }
      }
    }
  }
}
