/*

DÜZENLİ İFADELER

*/

//Örneğin telefon numaraları plakalar e posta adresleri gibi
//belirli koşulları olan yani bilinirliği olan ifadelerin tanımlanması için

//Örnek

telefon= /(\+(\d\d)|0)\s?(\d\d\d)\s?(\d\d\d)\s?(\d\d)s?(\d\d)/ 
/*
Yukarıda ki kodda  +90 544 400 40 40 telefon numarasını
nasıl oluşturabilirm onu gördük. '/' bu işaret işle başlayıp bitirdim
çünkü düzenli bir ifade yazacağımı belirtiyorum

ardından '\' ters slash attım ki + karekterini normal metinsel algılasın
donra '\d' ifadesi ise "digit"-> hane,basamak olduğunu belirtiyorum
sonra '|' ülke kodundan sonra 0 gelebilir demek için veya dedim
'\s?' ifadesi ile de değerler arasında boşluk olabilir boşluk olabilir  s>space ?>mı acaba

*/

tel=/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/ 

/*
Yukarıda ki kodda ise işi biraz daha kolay ve şartı rakamlar ile
belirterek yaptık
*/

//tarayıcıda test için (sonuç true dönücektir)

tel=/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm.test('Aramayın! +90 544 500 50 50');

// plaka tanımlayakım ama burada işin iiçne har de girecek 
//burada "w">word yerine şu harfle şu harf arası diyeceğiz
//neden çünkü "w" rakam veya harf alıyor ama plakamız bizim kesin harf le başlar
// [] > liste - liste içinden

plaka=/(\d{2})\s?([A-Z]{1,3})\s?(\d{2,4})/gm.test('Plakam 34 BJK 1903');

'Plakam 34 BJK 1903'.match(/(\d{2})\s?([A-Z]{1,3})\s?(\d{1,4})/gm); // Plakmu içinden çıkardım


/*

E MAİL YAZMAK İSE 
BAŞLI BAŞINA BİR BELA DENEMEYİN 
KOPYALA YAPIŞTIR YAPIN :)

kaynak: http://emailregex.com/

Telefon ve mail testelri içinde : https://regexr.com/

*/

email =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/





// kısa yollar 

// /\d/ = /[0-9]/ 
// /\D/ = /[^0-9]/ 
// /\w/ = /[A-Z]/
// /\W/ = /[^A-Z]/
// /\s/ = space

// /\d{1,}/ = /\d+/ 

// /\d{0,}/ = /\d*/ 

// ^ bu ifade baştan böyle başlamalı yabi ifade şartı koyup $ ile kapatıyorum