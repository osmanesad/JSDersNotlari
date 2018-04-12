/*

KOŞULLAR

*/

true && true && true // Sonuc true

true && false && true // Sonuc false

// && ve demek ve opratörü koşuulaırnı kesinlikle sağlanması gerekir.
// biri yapılmadığı sürece hata alınır

true || true || false // derdiğim zamanda ise herhangi birinin doğru olmasaı yeter

// çubuklar yani veya komutu ||

// yanlışı bulana kadar ve sorgusu devam eder

//Örnek

function a(){ console.log('a kontorl edildi doğru');return true;}
function b(){ console.log('b kontrol edildi doğru'); return true;}
function c(){ console.log('c kontrol edildi yanlış'); return false;}

a() && b() && c() // değim zaman ilk iki işlemden sonra fale uyarısını vercek

c() && a() && b() // burada ise zaten ilk işlemde yanlış bulunduğundan gerisini döndürmeycek

// veya oparetöründe ise sadece birinde dğru sonucu görmesi durumunda işlem sonlanır

a() || b() || c() // dediğim zaman a doğru deyip işi bitircek

c() || a() || b() // c yanlış devam doğruyu bulana kadar ve a doğru işlem biter.

// Diğer optler

3 < 5
5 > 3
5 <= 3
3 >= 5
5 == 5
5 != 5 // Eşit değilse

// Başka bir durum ise EĞER şartıan bağlamak

if (true && true){
    console.log('Doğru'); // Eğer doğru doğru ise demek istedim Sonucu Doğru olacaktır

}

if (true && false){
    console.log('Doğru'); // Burada yanlış sonucunu alacağız patlama

}

// AMA

if (true && false){
    console.log('Doğru');
} else { // Burada ki else eğer durum DEĞİLSE olayını yapmaktadır
    console.log('Yanlış');
}

//Yukarıda ki kod şu şekilde de yazılabilir eğer ekrana yazacaksak

console.log( true && true ? 'Doğru' : 'Yanlış'); // ? true ve true DOĞRU MU : DEĞİLSE demek

!(true && true); //Ya değilse - Ya tutmazzsa