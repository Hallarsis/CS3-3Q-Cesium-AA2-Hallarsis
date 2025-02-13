function Functions(){
    let P1 = prompt('Initial Population');
    let rate = prompt('rate of growth');
    let time = prompt('time in hours');
    let P2 = Math.round(parseFloat(P1)*(Math.pow(Math.E,parseFloat(rate)*parseFloat(time))));
    let monstername = prompt('Monster Name');
    let monsterregion = prompt ('Monster Region');
    let o = ''
    let MONESTER = o.concat(monsterregion,' ',monstername).toUpperCase();
    let output = "After " + time + " hours, the population of " + MONESTER + " has risen to " + P2;
    document.getElementById('result').innerHTML = output;
}