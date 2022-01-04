let cnt = document.getElementById('app');
let msg = document.querySelector('.message')
let bouton = document.querySelector('.button')
let tab = Array();
let joueur = 'X';
let play = 1;

for(let i=1; i<=9; i++){
    tab[i]=' ';
}

remplir();

function remplir(){
    let zone = document.createElement('div');
    cnt.appendChild(zone);
    for(let i=1; i<=9; i++)
    {
        let grille = document.createElement('span');
        grille.id= i;
        grille.addEventListener('click',function(){
        if(play){
           if(tab[grille.id] == ' '){
                tab[grille.id] = joueur;
                grille.innerHTML = tab[grille.id];
                gagnante();
           }
        }
        })
        zone.appendChild(grille);
            if(i%3 == 0){
                let ligne = document.createElement('br');
                zone.appendChild(ligne);
            }
            grille.innerHTML = tab[i];
    }
}

function gagnante(){
    let winner = ' '; 
    if(tab[1]!=' ' && tab[1]==tab[2] && tab[2]==tab[3]){  winner = tab[1]; }
    if(tab[4]!=' ' && tab[4]==tab[5] && tab[5]==tab[6]){  winner = tab[4]; }
    if(tab[7]!=' ' && tab[7]==tab[8] && tab[8]==tab[9]){  winner = tab[7]; }
    if(tab[1]!=' ' && tab[1]==tab[4] && tab[4]==tab[7]){  winner = tab[1]; }
    if(tab[2]!=' ' && tab[2]==tab[5] && tab[5]==tab[8]){  winner = tab[2]; }
    if(tab[3]!=' ' && tab[3]==tab[6] && tab[6]==tab[9]){  winner = tab[3]; }
    if(tab[1]!=' ' && tab[1]==tab[5] && tab[5]==tab[9]){  winner = tab[1]; }
    if(tab[3]!=' ' && tab[3]==tab[5] && tab[5]==tab[7]){  winner = tab[3]; }
    if (winner != " "){
        msg.innerHTML = 'Les ' + winner + ' ont gagné !';
        play = false;
        msg.classList.add('success');
    } else {
        joueur = (joueur=='X')?'O':'X';
        msg.innerHTML = 'C\' est au ' + joueur + ' de jouer ... ';
    }
}

bouton.addEventListener('click', function(){
    msg.classList.remove('success');
    msg.innerHTML = 'C\' est au ' + joueur + ' de jouer ... ';
    for (let i=1; i<=9; i++)
    {
        tab[i]= ' ';
    }
    while(cnt.firstChild){
        cnt.removeChild(cnt.lastChild);
    }
    remplir();
    play = true;
})