/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // CRUD TB_NOTA_FISCAL_VENDA

  // Insert
  
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {id: 1, codigo: "9", data: "29/05", valorNota: "131", cliente_id: "1", itemNotaFiscal_id: "1"},
    {id: 2, codigo: "8", data: "24/02", valorNota: "301", cliente_id: "2", itemNotaFiscal_id: "2"},
    {id: 3, codigo: "7", data: "03/09", valorNota: "121", cliente_id: "3", itemNotaFiscal_id: "3"},
  ]);
 
  // Update 
  await knex('TB_NOTA_FISCAL_VENDA')
.where('codigo', '=', '7')
.update({valorNota: "90"})

// Delete 

await knex('TB_NOTA_FISCAL_VENDA')
.where('id', '=', '1')
.del()

// Select
function runKnex(){

var result = knex.column('id','codigo', 'valorNota', 'cliente_id', 'itemNotaFiscal_id').select().from('TB_NOTA_FISCAL_VENDA')
 return result.then(function(rows){
    return rows;
})
}
};


