/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // CRUD TB_ITEM_NOTA_FISCAL
  
  // Insert
  
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 1, sequencial: '390', quantidade: "9", valor: "32.00", produto_id: "10", notaFiscal_id: "1", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '131', quantidade: "5", valor: "82.75", produto_id: "20", notaFiscal_id: "2", TipoCliente: "Pessoa_Fisica"},
    {id: 3, sequencial: '011', quantidade: "7", valor: "9.80", produto_id: "30", notaFiscal_id: "3", TipoCliente: "Pessoa_Fisica"},
  ]);

  
  // Update 
  await knex('TB_ITEM_NOTA_FISCAL')
.where('sequencial', '=', '390')
.update({valor: "50.00"})

// Delete 

await knex('TB_ITEM_NOTA_FISCAL')
.where('id', '=', '3')
.del()

// Select
function runKnex(){

var result = knex.column('id','sequencial', 'valor', 'produto_id', 'notaFiscal_id', 'TipoCliente').select().from('TB_ITEM_NOTA_FISCAL')
 return result.then(function(rows){
    return rows;
})
}
};