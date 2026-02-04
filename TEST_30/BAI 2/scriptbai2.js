let Prices = [100,200,300,400,600,12312,125];
for (const element of Prices){
    console.log(element)
}

for (let index in Prices){
    console.log(`vị trí${index}`)
}

for (let index = 0 ; index < Prices.length ; index++){
    if(index % 2 == 0){
        console.log(`Vi trí index chẵn là ${index}`);
    }
}