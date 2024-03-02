const toggle = document.querySelector('#js-ld-toggle');

let boards = document.querySelectorAll('.sidebar-options__option');

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

function inativaTodosBoards() {
    boards.forEach((board) => {
        board.style.backgroundColor = '';
        board.style.color = '#828FA3';
        board.children[0].src = './assets/fluent_board-split-grey.png';
        board.classList.remove('sidebar-options__option--selected');
    })
}
