const toggle = document.querySelector('#js-ld-toggle');

let boards = document.querySelectorAll('.sidebar-options__option');

// TOGGLE LIGHT AND DARK MODE
toggle.onclick = function(){
    this.classList.toggle('jc-e');
}

boards.forEach((board) => {
    // STYLES BOARDS HOVER IN AND OUT
    board.onmouseover = ()=>{
        board.style.backgroundColor = '#A8A4FF';
        board.style.color = '#ffffff';
        board.children[0].src = './assets/fluent_board-split-white.png';
    }
    board.onmouseout = ()=>{
        board.style.backgroundColor = '';
        board.style.color = '#828FA3';
        board.children[0].src = './assets/fluent_board-split-grey.png';
    }

})
