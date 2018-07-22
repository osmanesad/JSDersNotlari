/* Veri Türleri */

//Array Veri Türü

[0,1,2,3,4];

var a = [0,1,2,3,4];

a

// (5) [0, 1, 2, 3, 4]

a.concat([5,6]);

// (7) [0, 1, 2, 3, 4, 5, 6]

a.fill('Ha');

// (5) ["Ha", "Ha", "Ha", "Ha", "Ha"]

Array(5);

Array(5).fill('Happy Birthday!');

// Anladınız siz ne yaptığını.

a.filter(item => item % 2 ==0); //2 ye bölümünden kalanları listele yani çift rakamları.

// (3) [0, 2, 4]

a.forEach(function(item){console.log(item)}); //Her bir değer için kosola yazdır.

a.join('+');

// "0+1+2+3+4"

a.map(item => item + 5);

// (5) [5, 6, 7, 8, 9]

a.map(item => item * item);

// (5) [0, 1, 4, 9, 16]

a.reverse();

// 4 3 2 1 tersi

['ali','mehmet','ender','engin','murat','osman','kemal'].sort((a,b)=>a.localeCompare(b,'tr'));

// (7) ["ali", "ender", "engin", "kemal", "mehmet", "murat", "osman"]

