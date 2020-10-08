function area(largura, altura){
    const area = largura * altura
    if(area > 20 ){
        console.log(`Tamanho de area no valor ${area} não é permitido` )
    }else {
        area
    }
}

console.log(area(2,2))
console.log(area(20,2))
console.log(area(2,2,9,0))
console.log(area())

const area2 = (largura, altura) => largura * altura

console.log(area2(2,2))