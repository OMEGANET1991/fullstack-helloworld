function sarasa() {
    debugger
}


function frutoseco(nombreeee) {
    console.log(nombreeee)
    console.log(typeof nombreeee)
    sarasa(1, 2, 3, 3)
}

async function mani() {

    frutoseco("nuez")
    frutoseco(14)
    frutoseco([11,11,14])
    frutoseco(function() {
        alert("esto nunca sucedera")
    })
    frutoseco({
        ob: "jeto"
    })
    
    
    const battery = await navigator.getBattery()
    debugger
    console.log(battery)
} 

mani()
const a = 1;


let b = 2
b = 3