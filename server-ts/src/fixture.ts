import db from "./db";

async function loadFixtures(clearData = false) {
    if(clearData){
        console.warn('clearing data')
        await db('userResult').del()
        await db('announcement').del()
    }

    await db.batchInsert('announcement', [
        { id: 1, topic: '240-124 Midterm 1/2566', description: 'คะแนน Assignment ชิ้นที่ 1', pubDateTime: '2022-12-21 11:00:00', userCode: 'suthon.s'},
        { id: 2, topic: 'ทุนเรียนดีประจำปี 2567', description: 'test 123', remarkIfPositive: 'Congrat for everyone', pubDateTime: '2022-12-10 15:00:00', userCode: 'suthon.s'}
    ]) 

    await db.batchInsert('user_result', [
        { id: 1, announcementId: 1, result: '26', remark: 'โดนหักคะแนนจากการเข้าสอบสาย', updateDateTime: '2022-09-07 09:30:00', userCode: '6210110227'},
        { id: 2, announcementId: 1, result: '33.4', updateDateTime: '2022-12-07 11:15:41', userCode: '6210110227'},
        { id: 3, announcementId: 2, result: 'ได้รับทุน', remark: '', resultType: 1,  updateDateTime: '2022-09-08 10:15:30', userCode: '6210110227'}
    ])
}

export default loadFixtures