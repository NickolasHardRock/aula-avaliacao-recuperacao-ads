const {describe,it,test,expect,beforeAll,afterAll} = require('@jest/globals')
const generetePassword = require ('../../src/fns/generate-password')

describe("Teste para função Generete Password", () =>{

    test("Gerar senha nova", async () => {
        
        const salt = 18
        
        const senha = await generetePassword(salt)

        expect(senha).not.toBeNull

        console.log("Senha aqui >>>",senha)
        
    })
    
    test("Gerar senhas diferentes a cada execução", async () => {
        const salt = 18
        const senha1 = await generetePassword(salt)
        const senha2 = await generetePassword(salt)
        expect(senha1).not.toBe(senha2)
        
        console.log("Senha aqui >>>",senha1)
        
    })

    test("Gerar senhas com 18 caracteres", async () => {
        const senha = await generetePassword(9)
      
        expect(senha.length).toBe(18)
        expect(senha).toHaveLength(18)

        console.log("Senha aqui >>>",senha)

    })

    test("Gerar senhas com 36 caracteres", async () => {
        const senha = await generetePassword(18)
      
        expect(senha.length).toBe(36)
        expect(senha).toHaveLength(36)

        console.log("Senha aqui >>>",senha)

    })

    
    test("Gerar senhas com 72 caracteres", async () => {
        const senha = await generetePassword(36)
        
        expect(senha.length).toBe(72)
        expect(senha).toHaveLength(72)
        
        console.log("Senha aqui >>>",senha)
        
    })
    
    

})
