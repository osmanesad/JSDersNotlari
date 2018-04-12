/*

GEÇİCİ VE ÖZEL DEĞİŞKENLER

*/


var i=0; // Burada i bir değişken
while(i<10){
    console.log('Hi There');
    i++;
}

// geçici yani bir defeaya mahsus kullanım için 
// Alt tire yani _ kullanıcaz

var _i=0; // Burada i bir değişken
while(_i<10){
    console.log('Hi There');
    _i++;
}


//Örnek 2

function kullaniciyiGetir(){
    var _kullaniciID= kullaniciIDAl();
    get(`/user/${_kullaniciID}`);
    
}

// birde swap yani geçiş yada değiştir

var a=2;
var b=3;

var _tmp=a;
var a=b;
var b= _tmp;

