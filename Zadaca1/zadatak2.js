const conversion = 7.53;
let euro;
function convert(num){
    euro = num * conversion;
}

function myButtonOnclick(){
    let kuna = document.getElementById('myText').value;
    convert(kune);
    alert(kuna+ "kn je "+euru+"€")  
}