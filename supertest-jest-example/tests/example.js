const request = require("supertest");

describe('Example suite', () => {
    describe('Jest example', () => {
        it('A happy test', async () => {
            const aNumber = 1;

            expect(aNumber).toBe(1);
        })

        it('A test with error', async () => {
            const aNumber = 2;

            expect(aNumber).toBe(1);
        })
    })

    describe('Example with supertest and jest', () => {
        it('GET example', async () => {
            const { body } = await request("https://jsonplaceholder.typicode.com")
                .get("/posts/1/comments")
                .expect(200);

            expect(body.length).toBe(5);
        })
    })
})