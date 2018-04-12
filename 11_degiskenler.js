/*

DEĞİŞKENLER

*/

// varibal <-- değişken  var


// burda name ve surname içeriğinin doldurulmasına göre değişir
// name ' e Ahmet yazarsam bir sonraki çalışrımada Osman yerine
// Ahmet yazacaktır.
var name='Osman';
var surname='Esad';
var fullname=name+' '+surname;


/*
Değişkenler rakamla başlamaz
sadece rakamda olamaz
ama sonu rakam ile bitebilir
*/

//var 213 ='Osman';  X
//var 2name='Esad'; X
var name1='Esad'; //V

//var _name olur
//var -name olamaz
//var $name olur

var $='jquery';
var _='underscore'

// tek satır kulanımı

var name='osman', surname='esad', age='24';

var name='osman'
, surname='esad'
, age='24';


/*
Önemki nokta
fonksiyonun içerisinde var kullanmazsan
değişken fonksiyonun dışında da kullanılabilir hale gelir

*/

function foksiyon(){ // Burada var şeklinde yazıldığında sadece fonksiyon() dönecektir
    var isim='Osman';
    console.log(isim);
}


// Ama burada isim değişkeni fonksiyonun dışında da işlem görür
// Bu ileriki satırlarda sorun yaşammıza neden olabilir.
// Bu yüzde var değişken tanımlamasını yapmakta fayda var.
function foksiyon1(){ 
    isim='Osman';
    console.log('isim')
}
