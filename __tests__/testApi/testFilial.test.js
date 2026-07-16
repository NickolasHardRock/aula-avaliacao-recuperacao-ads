
const app = require("../../index.js")
const request = require("supertest")
const database = require("../../src/database.js")


describe("Teste de api para usuarios", () => {

    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6ImFkbWluIiwib3JnYW5pemF0aW9uSWQiOjEzLCJpYXQiOjE3ODQwNzY0OTEsImV4cCI6MTc4NDA4MDA5MX0.bAkxe8wcArxTsKTwkSN6iCLygzS8QMA0XZLw93b92zA"

    test("Criar uma nova filial", async () => {
        body = {
            "name": "nickolasNetWor",
            "address": "lçfasdfa",
            "phone": 231234,
            "email": "asfdasfdsadf"
        }

        const resposta = await request(app)
        .post('/api/v1/filial')
        .send(body)

    })

    test("Buscar filial Id", async () => {
    
        const resposta = await request(app)
        .get('/api/v1/filial/17')
        .send()

        console.log(resposta)

        // console.log(resposta, "E este aqui")

    })


    // test("Criar um usuario novo", async() =>{
    //     body = {
    //         name: "seuCagao",
    //         email: "seuCagao@teste.com.br",
    //         password: "r232sfs",
    //         role:'admin'
    //     }


    //     const resposta = await request(app)
    //     .post('/api/v1/pessoa')
    //     // .set("Authorization", token)
    //     .send(body)

    //     console.log(resposta.body)
    // })


})