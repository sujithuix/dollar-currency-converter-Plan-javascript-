function convertCurrency(){
    var toConvertValue = document.getElementById("toConvertValue").value;
    var selectedCurrency = document.getElementById("currencySelector");
    var selectedCurrencyValue = selectedCurrency.value;

switch(selectedCurrencyValue){
    case 'inr':{
      var convertedValue = toConvertValue*60.10;
      break;
    }
    case 'pound':{
      var convertedValue = toConvertValue*0.78;  
      break;
    }
    case 'dirham':{
      var convertedValue = toConvertValue*3.67;
      break;
    }
}
    document.getElementById("convertedValue").value = convertedValue.toFixed(2);
}
