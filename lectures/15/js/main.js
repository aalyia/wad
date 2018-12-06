var list = [
	{
	AccountTitle: 'Aalyia tabasum',
	Balanec: 6545,
	currency:'pk',
	IBAN:56789
	}

]

document.getElementById("title").innerHTML=list[0].AccountTitle;
document.getElementById("balance").innerHTML=list[0].Balanec;
document.getElementById("currency").innerHTML=list[0].currency;
document.getElementById("IBAN").innerHTML=list[0].IBAN;
function deposite(){

}
function search(event,dep)
 {
    if(event.keyCode == 13)
     {
     	if(isNaN(dep))
     	{
    alert(" is  not a number ");
 		}
   document.getElementById("deposit-msg").innerHTML=;
      
       }
}
