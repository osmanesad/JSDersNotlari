/*

DÖNGÜLER

*/


// Bunu asla evede denemeyin. Hatta perfarmansından şüphe ettiğiniz pc de çalıştırmayın
function sonsuz(){
    console.log('Biri beni durdursun');
    sonsuz();
}


// for döngüsü

/*

for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) 
  ifade

  Kaynak: dev/mozilla
*/ 

for(i=0;/*i 0 ise koşulum*/ i<=10;/* i 10 olana kadar */ i++ /* i yi 1er arttur */){
    console.log('Merhaba'); // ve ekrena merhaba yaz.
}

// do - while dalaveresi


var i = 0; // başlangıç değerim 0
do { // i'yi arttır kendine eşit olana kadar döndür.( burada koşul sağlanana kadar.)
  i += 1;
  console.log(i);
} while (i < 5); // koşulum i 5 ten büyük olamaz (i yi 5 olana kadar)



// while (sürece bağlı döngü)

var x = 0;
while (x <= 10) {
   console.log('Hay dehr');
  x ++;
}


// for daha anlaşılır ve kolay. diğer ikisnde benzerlik ve anlam karşamaşası var gibi
for(x=0;x<=10;x++){ 
  console.log('hi there');

}

//Döngü durdurma koşula bağlı olarak

var a=0;
while(true){
  console.log('bitcoin','ether','ripple');
  a++;
  if(a==10) break; // eğer a 10 olursa koşulu bitir durdur çık
}


// 5'i pas geç yazdır
var a=0;
while(true){
  if(a==5){ // eğer 5 görürsen atla devam et
    a++; continue;
  };
  console.log('bitcoin','ether','ripple' + a);
  a++;
  if(a==10) break; // eğer a 10 olursa koşulu bitir durdur çık
  
}
