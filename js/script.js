// DICHIARAZIONE VARIABILI
let btn = document.querySelector(".btn")
let grid = document.querySelector(".grid")
let square10 = "square-10"
let square = document.querySelector(".square-10");

// CREAZIONE FUNZIONI
function squareGenerator(a){
    let square = document.createElement("div")
    square.classList.add(a)
    return square
}
function gridGenerator(a, b, c){
    for( let i=a; i<=b; i++){
        let square=squareGenerator(c)
        square.innerHTML=i
        grid.append(square)

        // IMPOSTAZIONE CLICK SQUARE
        square.addEventListener("click", function(){

            square.classList.add("clicked")
            console.log(this.innerHTML)
        })
    }
}

// IMPOSTAZIONE CLICK BTN
btn.addEventListener("click", function(){

    grid.innerHTML = "";
    if(grid.innerHTML === ""){
        gridGenerator(1, 100, square10)
    } else {
        grid.innerHTML = "";
        gridGenerator(1, 100, square10)
    }
})
