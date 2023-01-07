import Router from "koa-router";

const router = new Router()

router
    .get('/',(ctx,next) => {
        ctx.body = [
        { id: 1, announcementId: 1, result: '26', remark: 'โดนหักคะแนนจากการเข้าสอบสาย', updateDateTime: '2022-09-07 09:30:00', userCode: '6210110194'},
        { id: 2, announcementId: 1, result: '33.4', updateDateTime: '2022-12-07 11:15:41', userCode: '6210110222'},
        { id: 3, announcementId: 2, result: 'ได้รับทุน', remark: '', resultType: 1,  updateDateTime: '2022-09-08 10:15:30', userCode: '6210110101'}
        ]
    })

export default router
