const { default: knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // INSERÇÃO DO CRUD UTILIZANDO O KNEX.

  // Insert
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {id: 1, codigo: '305', cnpjcpf: '78879240064', nome: "João", TipoCliente: "Pessoa_Fisica"},
    {id: 2, codigo: '107', cnpjcpf: '99710237098', nome: "Carlos", TipoCliente: "Pessoa_Fisica"},
    {id: 3, codigo: '322', cnpjcpf: '52874559091', nome: "Ana", TipoCliente: "Pessoa_Fisica"},
    {id: 4, codigo: '325', cnpjcpf: '40321838124', nome: "Ana.L", TipoCliente: "Pessoa_Fisica"},
       ]);


  // Update 
    await knex('TB_CLIENTE')
    .where('codigo', '=', '325')
    .update({nome: "Joaquim Lopes"})

  // Delete 

  await knex('TB_CLIENTE')
  .where('codigo', '=', '107')
  .del()

  // Select
  function runKnex(){

    var result = knex.column('tipoCliente','codigo', 'cnpjcpf', 'nome').select().from('TB_CLIENTE')
     return result.then(function(rows){
        return rows;
    })
  }
};
