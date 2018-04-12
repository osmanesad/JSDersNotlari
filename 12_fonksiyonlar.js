/*

FONKSİYONLAR

*/

/*

En basit şekilde tanımlarsak
bir kaç prosedürü yada aşamayı tek sorguda çağırmak
paketlemek

*/

//Örnek (Prosedürel - Procedural)

function selemla(){
    console.log('Merhaba'); // Bu satırları tek tek de çağırabilirdim
    console.log('Nasılsiniz'); // Ancak selemla komutu-fonksiyonu ile tek bir pakte topladım
}

//Matematiksel bir ifade olduğu gibi sonuca yönelik
// yani içinde yapılan işlemin sonucunu vermesi içinde fonksiyon 
//Kullanıyoruz

//Örnek

function f(x){
    var islem=2*x;
    var islem2=islem+5;
    return islem2; 
    // Burada return komutu ile bana yapılan işlemlerin sonucunu getir döndür
    //fonksiyonu işle çevir anlamına geliyor (return)
}

//Örnek 2 Daha kısa hali

function f(x){
    return 2*x+5; // Yukarıdaki işlşemin daha basit anlaşılır tek satır hali
}

// Başka bir örnekte ise 2 işlemi tek return ile yapalım

function g(x){
    return [2 * x + 5, 3 * x]; 
    // Burada önce birinci işlemin sonucu sonra ikinci işlemin sonucunu bize verecektir
}

// fog işlemide yapılabilir

function f(x){
    return 2*x+5; 

}

function g(x){
    return 3 * x; 
    
}

//g(3) dediğim zaman 9

//f(9) dediğim zaman 23

// f(g(3)) dediğim zaman 23 alabilirm

// Yukarıdaki satırlardan sonra ekrana f(g(3)) dersem fog yaptırmış olurum

/*

Bir değişkene fonksiyonda atanabilir

*/

var f = function(x){return 2 * x + 5;} // gibi. f değişkenini başka yerde işlem yaptırmakta kullanabilirm.

