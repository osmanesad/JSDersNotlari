var cay=true;
var su=true;
var demlik=true;

if(cay && su && demlik){
    console.log('Çay demle')
}


////////////////////////////////

var cay=true;
var su=true;
var demlik=true;
var sıcaksu=false;

if(cay && su && demlik){
    console.log('Malzeme var çay yap');
    if(sıcaksu != true){
      console.log('Su sıcak değil kaynat');
    }else {console.log('Su kaynamış çay demlensin');}
}


/////////////////////////////////

for(araba=0;araba<20;araba++){
   
    console.log('Yeni araba'+araba);
}


////////////////////////////////

// telefon numarasını gizleyelim

'Aramayın! +90 544 500 50 50'.replace(/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm,'*gizlendi*');

// telefon numarasını çıkaralım

// telefon numarasını gizleyelim

'Aramayın! +90 544 500 50 50'.match(/(\+(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm);
