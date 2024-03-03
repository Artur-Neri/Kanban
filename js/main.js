const toggle = document.querySelector('#js-ld-toggle');


let btns1 = document.querySelectorAll('.button1');

const sidebar = document.querySelector('.sidebar');
const mainLogo = document.querySelector('.main__logo');
const mainHeaderSidebar = document.querySelector('.main__header-sidebar--hidden');
const mainHeader = document.querySelector('.main__header');
const mainView = document.querySelector('.main__view');
const btnShowSidebar = document.querySelector('.show-sidebar');
const btnSidebarHide = document.querySelector('.sidebar__hide');

const menuOptions = document.querySelector('.main__header-menu');
const menuOptionShow = document.querySelector('.main__header-menu-options');

const listaQuadros = document.querySelector('#listaQuadros');
const mainViewBoard = document.querySelector('.main__view--board');

let quadros = [
    {
        id: 0,
        titulo: 'Quadro 1',
        colunas: [
            {
                titulo: 'Coluna 1 B1',
                tarefas: [
                    {
                        tarefa: 'Build UI for onboarding flow',
                        descricao: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    },
                    {
                        tarefa: 'Tarefa 2 id 0',
                        descricao: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    }
                ]
            },


            {
                titulo: 'Coluna 2 b1',
                tarefas: [
                    {
                        tarefa: 'Tarefa 1 da coluna 2',
                        descricao: "Planeja tudo incrivelmente planejado",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    },
                    {
                        tarefa: 'Tarefa 2 da coluna 2',
                        descricao: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    }
                ]
            }


        ],
        status: 'Doing'
    },
    {
        id: 1,
        titulo: 'Quadro 2',
        colunas: [
            {
                titulo: 'coluna 1 b2',
                tarefas: [
                    {
                        tarefa: 'Primeira tarefa do id 1',
                        descricao: "Descricao da tarefa 1 do id 1",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    },
                    {
                        tarefa: 'Segunda tarefa do id 2',
                        descricao: "Descricao da tarefa 2 do id 1",
                        subtarefas: [
                            {
                                check: true,
                                descricao: 'Research competitor pricing and business models'
                            }

                        ]
                    }
                ]
            }
        ],
        status: null
    },
    {
        id: 2,
        titulo: 'Quadro 3',
        colunas: [],
        status: null
    }
]

function renderizaListaQuadros() {
    let elementoQuadros = quadros.map(quadro => {
        return (
`<li class="sidebar-options__option" data-id="${quadro.id}">
    <img src="./assets/fluent_board-split-grey.png" alt="board" />
    <span>${quadro.titulo}</span>
</li>
`)
    }).join('');

    listaQuadros.innerHTML = elementoQuadros;
}

// PRIMEIRO CRIA OS ELEMENTOS, DEPOIS SELECIONA
renderizaListaQuadros();
let boards = document.querySelectorAll('.sidebar-options__option');


menuOptions.onclick = () => {
    menuOptionShow.classList.toggle('show-flex')
}

// TOGGLE LIGHT AND DARK MODE
toggle.onclick = function(){
    this.classList.toggle('jc-e');
}

boards.forEach((board) => {
    // STYLES BOARDS HOVER IN AND OUT
    board.onmouseover = ()=>{

        if (board.classList.contains('sidebar-options__option--selected')) {
            console.log('nada');
        } else {
            board.style.backgroundColor = '#A8A4FF';
            board.style.color = '#ffffff';
            board.children[0].src = './assets/fluent_board-split-white.png';
        }

    }
    board.onmouseout = ()=>{

        if (board.classList.contains('sidebar-options__option--selected')) {
            console.log('nada');
        } else {
            board.style.backgroundColor = '';
            board.style.color = '#828FA3';
            board.children[0].src = './assets/fluent_board-split-grey.png';
        }

    }

    // STYLES BOARDS TO ACTIVE

    board.onclick = () => {
        inativaTodosBoards();
        board.style.backgroundColor = '#635FC7';
        board.style.color = '#ffffff';
        board.children[0].src = './assets/fluent_board-split-white.png';
        board.classList.toggle('sidebar-options__option--selected');
        console.log('toggle');

        // CARREGA AS COLUNAS NA TELA PRINCIPAL
        console.log(quadros[board.dataset.id]);
        renderizaColunasNaTelaPrincipal(quadros[board.dataset.id]);
    }

})

function renderizaColunasNaTelaPrincipal(quadro){
    console.log('renderizando quadro', quadro.titulo);
    if (quadro.colunas.length < 1) {
        console.log('quadro sem colunas');
        mainView.innerHTML = `<div class="main__view--empty">
        <span>This board is empty. Create a new column to get started.</span>
        <button class="button1">+ Add New Column</button>
      </div>`

    } else {
        mainView.innerHTML = '';
        let novasColunas ='';

        quadro.colunas.forEach(coluna => {
            let novasTarefas = coluna.tarefas.map(tarefa => {
                return(`<div class="main__view--board-tarefa">
                    <h4 class="tarefa-titulo">${tarefa.tarefa}</h4>
                    <span class="tarefa-progress">0 of 3 subtasks</span>
                </div>`)
            }).join('');
            let novaColuna = `<div class="main__view--board-coluna">
                <h3 class="coluna-title"><span class="cor-coluna"></span>${coluna.titulo} (1)</h3>
                <div class="coluna-tarefas">
                    ${novasTarefas}
                </div>
            </div>
            `
            novasColunas += novaColuna;
            console.log(novasColunas);
        });

        console.log(novasColunas);
        mainView.innerHTML = `<div class="main__view--board">${novasColunas}</div>`

    }
}

// ESCONDER A BARRA LATERAL

btnSidebarHide.onclick = function(){
    console.log('hide');
    sidebar.style.display = 'none';

    mainLogo.style.display = 'block';
    mainLogo.style.padding = '35px 24px';
    mainLogo.style.borderRight = '1px solid var(--color-lines-dark)';

    mainHeaderSidebar.style.display = 'flex';
    mainHeaderSidebar.style.backgroundColor = 'var(--color-dark-grey)';
    mainHeaderSidebar.style.borderBottom = 'var(--color-lines-dark)';

    mainHeader.style.flex = '1';

    mainView.style.position = 'relative';

    btnShowSidebar.style.display = 'block';

}

// MOSTRAR A BARRA LATERAL

btnShowSidebar.onclick = function() {
    sidebar.style.display = 'flex';
    btnShowSidebar.style.display = 'none';
    mainLogo.style.display = 'none';
}

function inativaTodosBoards() {
    // DESMARCA AS BOARDS SELECIONADAS NA SIDEBAR
    boards.forEach((board) => {
        board.style.backgroundColor = '';
        board.style.color = '#828FA3';
        board.children[0].src = './assets/fluent_board-split-grey.png';
        board.classList.remove('sidebar-options__option--selected');
    })
}

// Verifica se o botão está ativo para mudar ou não a cor do background
btns1.forEach((button) => {
    button.onmouseover = ()=>{
        if (button.classList.contains('button1-inactive')){
            console.log('inactive button');
        } else {
            button.style.backgroundColor = 'var(--color-main-purple-hover)'
        }
    }

    button.onmouseout = ()=> {
       if (button.classList.contains('button1-inactive')){
            console.log('inactive button');
        } else {
            button.style.backgroundColor = 'var(--color-main-purple)'
        } 
    }
})