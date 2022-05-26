var db = openDatabase('APP','v1.0','Minha base',2*1024*1024)

function abrirPage(x){
    if (x == 1){
        window.open("page2.html?usuario="+usuario,"_self");
    }
    if (x == 2){
        window.open("page3.html?usuario="+usuario,"_self");
    }
    if (x == 3){
        window.open("page4.html?usuario="+usuario,"_self");
    }
    if (x == 4){
        window.open("page5.html?usuario="+usuario,"_self");
    }
    if (x == 5){
        window.open("page6.html?usuario="+usuario,"_self");
    }
    if (x == 6){
        window.open("page7.html?usuario="+usuario,"_self");
    }
    if (x == 7){
        window.open("page8.html?usuario="+usuario,"_self");
    }
    if (x == 8){
        window.open("page9.html?usuario="+usuario,"_self");
    }
}

var variaveis = new URLSearchParams(location.search);
var usuario = variaveis.get('usuario');

db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS users(login VARCHAR(40) PRIMARY KEY,password VARCHAR(40), imagem TEXT)')
});
db.transaction(function(tx)
{
    tx.executeSql('CREATE TABLE IF NOT EXISTS pedidos(id INTEGER PRIMARY KEY AUTOINCREMENT, tamanho CHAR(1), produto VARCHAR(20), preco DECIMAL)')
})