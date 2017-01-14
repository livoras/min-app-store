import Router from '../../utils/router'
import fs from 'fs'
import oss from '../../stores/oss'
import path from 'path'
import uuid from 'uuid'

const router = new Router()

router.post('/upload', async (ctx) => {
  const file = ctx.request.body.files.file
  const fileName = `${uuid.v4()}${path.extname(file.name)}`
  return new Promise((resolve, reject) => {
    fs.readFile(file.path, (err, data) => {
      if (err) reject(err)
      oss.putObject({
        Body: data,
        Bucket: 'mini-app',
        Key: fileName,
        ContentType: file.type
      }, (err, data) => {
        if (err) reject(err)
        resolve(`http://mini-app.oss-cn-shenzhen.aliyuncs.com/${fileName}`)
      })
    })
  })
})

export default router
