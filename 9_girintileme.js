/*


girintileme


Kod satırlarını yazarken işle sırasına
göre kodların satırı içinde veya satır dışında olma olayı

kod ağacının gelme şekli diyelim

*/



//Aşağıda yazılmış kod tek düze ve yanlış
// hangi kod hangi satırda bitiyor belli değil
function u(){
  var user ={
    name:'osman',
    address:{
      name:'ev',
      address:'istanbul'
    }
  }
  return user;
}


// Ama burda  hangi kod hangi satırda bitiyor belli
// zaten satır başlarından aşşağı iniş çizgileri anlatıyor
function u(){
  var user ={
    name:'osman',
    address:{
      name:'ev',
      address:'istanbul'
    }
  }
  return user;
}