const lista=[];
const categories=['','fruta','legumes','carne','peixe','bebidas','other'];


const addName = document.getElementById('addName');
const addCategoria = document.getElementById('addCategoria');
const addQuant =document.getElementById('addQuant');
const addForm = document.getElementById('addForm');
const table = document.getElementById('table');

//ATUALIZAR TABELA
const buildTable = () => {
    let template = '';
    for (const produto of lista) {
      template += `<tr>
          <td>${produto.nome}</td>
          <td>${produto.categoria}</td>
          <td>${produto.quant}</td>
      </tr>`;
    }
    table.innerHTML = template;
  };
  buildTable();


// ADICIONAR
const addLista = (e) => {
    e.preventDefault();
    const newLista = {
      nome: addName.value,
      categoria: addCategoria.value,
      quant: addQuant.value,

    };
    if (lista.some((Name) => Name.nome === newLista.nome)) {
      return alert(`O produto ${addName.value} já existe.`);
    }

    lista.push(newLista);
    buildTable();
    return true;
  };
  addForm.addEventListener('submit', addLista);

function nProdutos(){
    alert(`A lista de compras tem ${lista.length} produtos.`)
}

function produtosPorCate(){
    const cate =prompt(`Qual categoria ter contar`).toLowerCase();
    let filterCateg =lista.filter(item=>item.categoria == cate)
    alert (`A lista de compras tem ${filterCateg.length} produtos da categoria ${cate} a comprar.`)
}

function quatTotal(){
    let total =lista.reduce((sum, item)=> sum+ +item.quant,0)
    alert(`A lista de compras tem ${total} item de produtos.`)
}

function limparLista(){
    lista=[];
    buildTable();
}

function newCate(){
   let novacat =prompt('indique')
   if (categories.includes(novacat.toLowerCase())){
alert(`A categoria ${novacat} já existe no seletor.`)
   }else{
    categories.push(novacat)
   }
}