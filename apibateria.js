function sarasa() {
    debugger
}


function frutoseco(nombreeee) {
    console.log(nombreeee)
    console.log(typeof nombreeee)
    sarasa(2, 4, 3, 3)
}

async function mani() {

    frutoseco("nuez")
    frutoseco(15)
    frutoseco([11,11,11])
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


let b = 22
b = 34