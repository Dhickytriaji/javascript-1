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

   const indicatorColor = document.getElementById('resultBox')

    if (CalcbmiCount < 0 ){
        indicator = "Result not valid"
        indicatorColor.classList.toggle('NotValidColor' , bmiCalcCount)
     } else if(CalcbmiCount > 0 && CalcbmiCount < 18.05){
        indicator =  "UnderWeight"
        indicatorColor.classList.toggle('underWeight' bmiCalcCount)
     } else if(CalcbmiCount >=18.05 && CalcbmiCount <= 25.09){
        indicator =  "HealtyWeight"
        indicatorColor.classList.toggle('healtyWeightColor' bmiCalcCount)
     } else if(CalcbmiCount >=25.09 && CalcbmiCount <=29,9){
        indicator =  "OverWeight"
        indicatorColor.classList.toggle('overWeightColor' bmiCalcCount)
     } else if(CalcbmiCount >=29,9 && CalcbmiCount <= 50){
        indicator =  "obesity"
        indicatorColor.classList.toggle('obesityColor' bmiCalcCount)
     } else if(CalcbmiCount >=35 && CalcbmiCount <= 39){
    indicator =  "severeObesity"
    indicatorColor.classList.toggle('severeObesityColor' bmiCalcCount)
     }
     //console.log(indicator)
    
     document.getElementById('resultCategory').innerHTML = indicator

}