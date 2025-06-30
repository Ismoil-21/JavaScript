let ism = prompt("Ismingizni kiriting");
let harf = prompt("Harf kiriting");

if(ism.toLowerCase().includes(harf.toLowerCase ())){
    alert(`${ism} da ${harf} harfi mavjud`);
}
else{
    alert(`${ism} da ${harf} harfi mavjud emas`);
}