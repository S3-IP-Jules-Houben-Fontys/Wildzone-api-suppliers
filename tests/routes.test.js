const request = require('supertest')
const { sequelize } = require('../models')
const app = require('../server')

describe('Post Endpoint', function () {
    it('Should create a new supplier', async function () {
        const res = await request(app)
        .post('/api/suppliers')
        .send({
            "name": "Moses Dunlap",
            "email": "panulyqi@mailinator.com",
            "phoneNumber": "+1 (351) 308-7432",
            "country": "Netherlands",
            "place": "Eindhoven",
            "postalCode": "1234AB",
            "houseNumber": "consequat ut in adipisicing",
            "KVKnumber": 234,
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('phoneNumber')
        expect(res.body).toHaveProperty('country')
        expect(res.body).toHaveProperty('place')
        expect(res.body).toHaveProperty('postalCode')
        expect(res.body).toHaveProperty('houseNumber')
        expect(res.body).toHaveProperty('KVKnumber')       
    })
})

describe('Get Endpoints', ()=>{
    it('Should get a supplier with id "1"', async () => {
        const res = await request(app)
        .get('/api/suppliers/1')
        expect(res.statusCode).toEqual(200)
    })
    it('Should get all suppliers', async () => {
        const res = await request(app)
        .get('/api/suppliers/')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Put Endpoints', ()=>{
    it('Should update a supplier with id "1"', async () => {
        const res = await request(app)
        .put('/api/suppliers/1')
        .send({
            "name": "Moses Dunlop",
            "email": "panulyqi@mailinator.com",
            "phoneNumber": "+1 (351) 308-7432",
            "country": "Netherlands",
            "place": "Eindhoven",
            "postalCode": "1234AB",
            "houseNumber": "consequat ut in adipisicing",
            "KVKnumber": 234,
        })
        expect(res.statusCode).toEqual(200)

    })
})

describe("Delete Endpoints", () => {
    it('Should delete a supplier with id "1"', async () => {
        const res = await request(app)
        .delete('/api/suppliers/1')
        expect(res.statusCode).toEqual(200)
    })
})

afterAll(done => {
    app.close();
    done();
});