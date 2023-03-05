
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


// for (let i = 0; tile2.length-1; i++){
//     tile2[i].style.display = 'none';
// }


window.addEventListener("DOMContentLoaded", function () {
    console.log('gówno')
    for (let i = 0; document.getElementsByClassName("line0").length-3; i++){
        document.getElementsByClassName("line0")[i].style.display = "none";
    }
});

