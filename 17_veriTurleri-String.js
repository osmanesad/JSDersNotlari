/* Veri Türleri */

//String Veri Türü

'MerhabaAdana'.charAt(0);
//0.ıncı karakter ne?

'MerhabaIstanbul'.charCodeAt(6);
//6.ıncı karakterin karakter kodu? 97

//for example

String.fromCharCode(97);
// Dersem sonuç > a

0x20 // sonucu 32 

String.fromCharCode(32);
// " " < boşluk demek

'Mehaba'.concat('Dünya');

//İki kelimeyi birleştiriyor.

//Bunun yerine + kullanmak daha kolay gelebilir.

'Türkiye Cumhuriyeti'.endsWith('Cumhuriyeti');

//Parantez içine yazılan değer ile kelime son buluyır mu? true

'Plakalar 01 ile başlar'.indexOf('01');

//01 nereden başlıyor > 9.uncu karakterden başlıyor. - Baştan
//Eğer sondan istiyorsak lastIndexOf

'Peyniri dilimleyerek yemelisin'.slice(7,20);
//Cümle veya kelime içinden kesmek. (Evet saydım)

'Ali ve Veli akrabalar mı?'.split('');
//Sonuc:(25) ["A", "l", "i", " ", "v", "e", " ", "V", "e", "l", "i", " ", "a", "k", "r", "a", "b", "a", "l", "a", "r", " ", "m", "ı", "?"]

'Ali ve Veli akrabalar.'.split(' ve ');

//Sonuc: (2) ["Ali", "Veli akrabalar."] (akrabalar dan sonraki boşlukta tanımıyacaktı.)

'Benden sonra gelen herkes ayakta kaldı.'.substr(0,5);

//Dersem 0.ıncı karakterden sonra 5 karakter daha al 2,5 dersem 5 karakter tamamlayana kadar alacaktı.

'Benden sonra gelen herkes ayakta kaldı.'.substring(0,5);
//Burada ise 10.uncu karakterde son ver.

'ömer seyfettin'.toUpperCase(); //Lower - küçültmek
//"ÖMER SEYFETTIN" > işin saçmaladığı nokta. öÖ ama iI

'ömer seyfettin'.toLocaleUpperCase('tr');
//"ÖMER SEYFETTİN" al sana dalavere


'  Az laf çok iş. '.trim();
//"Az laf çok iş."