let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBth = document.querySelector("#flip-button");
let resetBth = document.querySelector("#reset-button");

flipBth.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000); 
    disableButton();
});
function updateStats(){
    document.querySelector("#heads-count").
    textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").
    textContent = `Tails: ${tails}`;
}
function disableButton(){
    flipBth.disabled = true;
    setTimeout(function() {
        flipBth.disabled = false;
    }, 3000);
}

resetBth.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});
