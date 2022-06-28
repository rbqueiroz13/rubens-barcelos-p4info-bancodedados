const { default: knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // CRUD TB_PRODUTO

  // Insert
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {id: 1, codigo: '399', descricao: "Arroz", valor: 1.80},
    {id: 2, codigo: '630', descricao: "Carne", valor: 10.00},
    {id: 3, codigo: '855', descricao: "Feijão", valor: 5.00},
    {id: 4, codigo: '875', descricao: "Macarrão", valor: 10.00},
    {id: 5, codigo: '355', descricao: "Molho Branco", valor: 5.00},
  ]);

 
  // Update 
  await knex('TB_PRODUTO')
.where('codigo', '=', '630')
.update({valor: "50.00"})

// Delete 

await knex('TB_PRODUTO')
.where('id', '=', '3')
.del()

// Select
function runKnex(){

var result = knex.column('id','codigo', 'descricao', 'valor').select().from('TB_CLIENTE')
 return result.then(function(rows){
    return rows;
})
}
};