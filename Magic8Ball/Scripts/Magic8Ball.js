var fortune = ["Better Luck Next Time", "You're Going To Have A Good Day", "Your House Will Catch On Fire", "Love Is In The Air", "Nice Try"]

function getRando() {
    var num = Math.round(Math.random() * (fortune.length-1));
    return num;
}
function getFortune() {
    document.getElementById("fortune").innerHTML = fortune[getRando()]
}