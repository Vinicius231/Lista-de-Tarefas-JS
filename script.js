var verificacao = 0

document.addEventListener('keydown',enter)

function enter() {
    var tecla = event.keyCode;
    console.log(tecla)
    if (tecla == 13) {
        lista.salvar();
    }
}

class Lista {
    constructor() {
        this.id = 1;
        this.arrayLista = []   
    }
    salvar() {
        let lista = this.lerDados();

        this.verificarCampo()
        if(verificacao == 1) {
            this.adicionar(lista)
        }
        this.listaTabela()

        this.limpar();
        
    }
    listaTabela() {
        // Apagar o tbody para não repetir tarefas ja escrita
        let tbody = document.querySelector('.tbody');
        tbody.innerText = '';

        // criar linha na tabela, criar img para deletar linhas
        for(let i = 0; i < this.arrayLista.length;i++) {
            let tr = tbody.insertRow();

            let td_lista = tr.insertCell();
            let td_excluir = tr.insertCell();

            td_lista.id= 'tarefas'
            td_excluir.id = 'excluir'

            td_lista.innerText = this.arrayLista[i].nomeTarefa;

            let imgDelete = document.createElement('img')
            imgDelete.src='img/delete.png'

            imgDelete.setAttribute('onclick','lista.deletar('+ this.arrayLista[i].id +')')


            td_excluir.appendChild(imgDelete)
            console.log(lista)
        }
    }
    //adicionar tarefas na tabela
    adicionar(lista){
        this.arrayLista.push(lista);
        this.id++
    }
    // dar um id para a tarefa escrita
    lerDados() {
        let lista = {}

        lista.id = this.id;
        lista.nomeTarefa = document.querySelector('.text').value;

        return lista;
       
    }
    //deletar a linha escrita na tabela
    deletar(id){
        let tbody = document.querySelector('.tbody');

        for(let i = 0; i < this.arrayLista.length; i++) {
            if(this.arrayLista[i].id == id) {
                this.arrayLista.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    } 
    limpar(){
        document.querySelector('.text').value = ''

    }
    verificarCampo() {
        let inputTarefa = document.querySelector('.text').value

        if(inputTarefa == '') {
            verificacao = 0
            
            var input2 = document.getElementById('text').style.animation='animecaixa 0.5s'

            setTimeout(remover,600)

            function remover() {
                document.getElementById('text').style.animation='none'
            }

        } else if (inputTarefa != '') {
            verificacao = 1
        }
    }
}

var lista = new Lista();