ship_move_distance();

function ship_move_distance(){
    let imagewidth = document.getElementById("sea").offsetWidth;
    document.documentElement.style.setProperty('--max-width', (imagewidth-50)+'px');
}


window.addEventListener('resize', function(event) {
    ship_move_distance();
});