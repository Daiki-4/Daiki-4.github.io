function currency(currency){
    var message ="";
    
    console.log(currency[currency]);
    
    if(currency == 1){
        message = "1ドル=105.28円";
    }
    if(currency == 2){
        message ="1ペソ=2.14円";
    }
    if(currency == 3){
        message ="1リンギット=24.84円";
    }
    alert(message);
}