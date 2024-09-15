function Calcbmi(){
    //console.log("hello World")
    
    var CalcbmiCount
    const weight = parseInt(document.getElementById('inputWeight').value)
    console.log(weight)

    const Height = parseInt(document.getElementById('inputHeight').value)
    console.log(Height)
    
    CalcbmiCount = (weight / Math.pow((Height/100),2)).toFixed(2) //ruus : berat/tinggi
    console.log(CalcbmiCount)

    document.getElementById('resultNumber').innerHTML = CalcbmiCount


    //indicator category
    if (CalcbmiCount < 0 ){
        indocator = "Result not valid"
     } else if(CalcbmiCount > 0 && CalcbmiCount < 18.05){
        indocator =  "Under Weight"
     } else if(CalcbmiCount >=18.05 && CalcbmiCount <= 25.09){
        indocator =  "Healty Weight"
     } else if(CalcbmiCount >=25.09 && CalcbmiCount <=29,9){
        indocator =  "Over Weight"
     } else if(CalcbmiCount >=29,9 && CalcbmiCount <= 50){
        indocator =  "obesity"
     } else if(CalcbmiCount >=35 && CalcbmiCount <= 39){
    indocator =  "severe obesity"
     }
     console.log(indocator)
    


}