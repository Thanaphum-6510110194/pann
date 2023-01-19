import Koa from 'koa'
import apiRouter from './api'
import loadFixtures from './fixture'
import appConfig from './config'
import { koaBody } from 'koa-body'
import { initSsoCert } from './auth'
import cors from '@koa/cors'



const app = new Koa()

app.use(cors());
app.use(koaBody());
app.use(apiRouter.routes());

(async () => {
    await loadFixtures(appConfig.ClearDataBeforeLoad)
    await initSsoCert()
    app.listen(8000)
    console.log('Server is ready at port 8000')
})();