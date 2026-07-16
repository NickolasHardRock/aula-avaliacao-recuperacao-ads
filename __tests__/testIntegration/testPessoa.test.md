const {describe,test,it,expect,beforeAll,afterAll} = require ('@jest/globals')
const pessoa = require('../../src/service/pessoa.js')
const conexao = require('../../src/database.js')

describe("Teste de Integração modulo inventario", () =>{

    let transaction

    beforeAll(async () => {
        transaction = await conexao.db.transaction()
         
    })

    test("Criar pessoa com todos os parametros",async () =>{
        const idFilial = 17
        const name = "ImpMan"
        const email = "devil@hotmail.com"
        const password = "6666666"
        const role = 'admin'

        const DevilOperator = await pessoa.Create(idFilial,name,email,password,role,transaction)

        expect(DevilOperator.dataValues.name).toBe(name)
        expect(DevilOperator.dataValues.email).toBe(email)
        expect(DevilOperator.dataValues.role).toBe(role)
       
    })

    test("Criar pessoa sem o Id",async () =>{
        const idFilial = null
        const name = "ImpMan"
        const email = "devil@hotmail.com"
        const password = "6666666"
        const role = 'admin'

         await expect (DevilOperator = pessoa.Create(idFilial,name,email,password,role,transaction)).rejects.toThrow(Error) 
    })

    test("Criar pessoa sem o name",async () =>{
        const idFilial = "17"
        const name = null
        const email = "devil@hotmail.com"
        const password = "6666666"
        const role = 'admin'

         await expect (DevilOperator = pessoa.Create(idFilial,name,email,password,role,transaction)).rejects.toThrow(Error) 
    })

    test("Criar pessoa sem o email",async () =>{
        const idFilial = "17"
        const name = "ImpMan"
        const email = null
        const password = "6666666"
        const role = 'admin'

         await expect (DevilOperator = pessoa.Create(idFilial,name,email,password,role,transaction)).rejects.toThrow(Error) 
    })

    test("Criar pessoa sem o password",async () =>{
        const idFilial = "17"
        const name = "ImpMan"
        const email = "devil@hotmail.com"
        const password = null
        const role = 'admin'

         await expect (DevilOperator = pessoa.Create(idFilial,name,email,password,role,transaction)).rejects.toThrow(Error) 
    })

    test("Criar pessoa sem o role",async () =>{
        const idFilial = "17"
        const name = "ImpMan"
        const email = "devil@hotmail.com"
        const password = "666666"
        const role = null

         await expect (DevilOperator = pessoa.Create(idFilial,name,email,password,role,transaction)).rejects.toThrow(Error) 
    })


    test("Buscar pessoa existente",async () => {
        const id = 50;
        const filialId=17
        // pessoa inserida manualmente no banco
        const getPessoaId = await pessoa.FindById(filialId,id,transaction);
        
        expect(getPessoaId).toHaveProperty("id",50)
    })

    test("Alterar todos os campos da filial", async() =>{
        const idFilial = 17
        const id = 50
        const name = "AngelMan"
        const email = "Paradasi@gmail.com"
        const password = "777777"
        const role = 'admin'

        
        const ParadiseOperator = await pessoa.Update(idFilial,id,name,email,password,role,transaction)
        expect(ParadiseOperator.dataValues.name).toBe(name)
        expect(ParadiseOperator.dataValues.email).toBe(email)
        expect(ParadiseOperator.dataValues.role).toBe(role) 

    })
    test("Alterar sem o id", async() =>{
        const idFilial = null
        const id = 50
        const name = "AngelMan"
        const email = "Paradasi@gmail.com"
        const password = "777777"
        const role = 'admin'

        await  expect( ParadiseOperator = pessoa.Update(idFilial,id,name,email,password,role,transaction)).rejects.toThrow()
        
    })
    
    test("Alterar com role não permitida", async() =>{
        const idFilial = 17
        const id = 50
        const name = "AngelMan"
        const email = "Paradasi@gmail.com"
        const password = "777777"
        const role = "usuario"

        await  expect( ParadiseOperator = pessoa.Update(idFilial,id,name,email,password,role,transaction)).rejects.toThrow()
        
    })

    // test("Alterar altera sem id ?", async() =>{
    //     const id = null
    //     const name = "paradise"
    //     const address = "paradisePlace"
    //     const phone = 7777777
    //     const email = "Paradise@paradise.com.br"
        
    //     await expect(ParadiseOrganization = organization.Update(id,name,address,phone,email,transaction)).rejects.toThrow(Error);
    // })

    // test("Deletar filial sem id", async() =>{
    //     const id = null
        
    //     await expect(ParadiseOrganization = organization.Delete(id,transaction)).rejects.toThrow(Error);
    // })

    // test("Deletar filial", async() =>{
    //     const id = 17
    //     const DeletarFiliar = await organization.Delete(id,transaction)
    //     expect(DeletarFiliar).not.toBeNull()
    // })


    afterAll(async () => {
        transaction.rollback()
        
    })








})