function sarasa() {
    debugger
}


function frutoseco(nombreeee) {
    console.log(nombreeee)
    console.log(typeof nombreeee)
    saraaa(2, 2, 3, 3)
}

async function mani() {

    frutoseco("nue pepino z")
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


let b = 2+4
b = 3+2