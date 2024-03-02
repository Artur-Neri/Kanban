const toggle = document.querySelector('#js-ld-toggle');

let boards = document.querySelectorAll('.sidebar-options__option');

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
    }

})

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