const toggle = document.querySelector('#js-ld-toggle');

let boards = document.querySelectorAll('.sidebar-options__option');

const sidebar = document.querySelector('.sidebar');
const mainLogo = document.querySelector('.main__logo');
const mainHeaderSidebar = document.querySelector('.main__header-sidebar--hidden');
const mainHeader = document.querySelector('.main__header');
const mainView = document.querySelector('.main__view');
const btnShowSidebar = document.querySelector('.show-sidebar');
const btnSidebarHide = document.querySelector('.sidebar__hide');

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
