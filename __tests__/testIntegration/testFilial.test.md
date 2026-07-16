const {describe,test,it,expect,beforeAll,afterAll} = require ('@jest/globals')
const organization = require('../../src/service/filial.js')
const conexao = require('../../src/database.js')

describe("Teste de Integração modulo inventario", () =>{

    let transaction

    beforeAll(async () => {
        transaction = await conexao.db.transaction()
         
    })

    test("Criar organização com todos os parametros",async () =>{
        const name = "hell"
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"

        const Devilorganization = await organization.Create(name,address,phone,email,transaction)

        expect(Devilorganization.filial.name).toBe(name)
        expect(Devilorganization.filial.address).toBe(address)
        expect(Devilorganization.filial.phone).toBe(phone)
        expect(Devilorganization.filial.email).toBe(email)
       
    })

    test("Criar organização com o parametros nome vazio",async () =>{
        const name = null
        const address = "rua hell"
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros address vazio",async () =>{
        const name = "hell"
        const address = null
        const phone = 6666666
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros phone vazio",async () =>{
        const name = "hell"
        const address = "rua hell"
        const phone = null
        const email = "devil@hotmail.com"
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })
    test("Criar organização com o parametros phone vazio",async () =>{
        const name = "hell"
        const address = "rua hell"
        const phone = 666666
        const email = null
        await expect( Devilorganization = organization.Create(name,address,phone,email,transaction)).rejects.toThrow();
    })

    test("Buscar filial existente",async () => {
        const id = 17;
        // filial inserida manualmente no banco
        const getFilialId = await organization.FindById(id);
        
        expect(getFilialId).toHaveProperty("id",17)
    })

    test("Alterar todos os campos da filial", async() =>{
        const id = 17
        const name = "paradise"
        const address = "paradisePlace"
        const phone = 7777777
        const email = "Paradise@paradise.com.br"
        
        const ParadiseOrganization = await organization.Update(id,name,address,phone,email,transaction)
        expect(ParadiseOrganization.dataValues.name).toBe(name)
        expect(ParadiseOrganization.dataValues.address).toBe(address)
        expect(ParadiseOrganization.dataValues.phone).toBe(phone)
        expect(ParadiseOrganization.dataValues.email).toBe(email) 

    })

    test("Alterar altera sem id ?", async() =>{
        const id = null
        const name = "paradise"
        const address = "paradisePlace"
        const phone = 7777777
        const email = "Paradise@paradise.com.br"
        
        await expect(ParadiseOrganization = organization.Update(id,name,address,phone,email,transaction)).rejects.toThrow(Error);
    })

    test("Deletar filial sem id", async() =>{
        const id = null
        
        await expect(ParadiseOrganization = organization.Delete(id,transaction)).rejects.toThrow(Error);
    })

    test("Deletar filial", async() =>{
        const id = 17
        const DeletarFiliar = await organization.Delete(id,transaction)
        expect(DeletarFiliar).not.toBeNull()
    })


    afterAll(async () => {
        transaction.rollback()
        
    })








})