
document.getElementById("btn").onclick=function(){
    if(document.getElementById("checkbox").checked){
        document.getElementById("subResult").textContent="You are subscribed";

    }
    else{
        document.getElementById("subResult").textContent="You are not subscribed yettt";
    }
    if(document.getElementById("visaBtn").checked){
        document.getElementById("payresult").textContent="You are paying by visa";
    }
    else if(document.getElementById("mastercardBtn").checked){
        document.getElementById("payresult").textContent="You are paying by mastercard";
    }
    else if(document.getElementById("PaypalBtn").checked){
        document.getElementById("payresult").textContent="You are paying by Paypal";
    }
    else{
        document.getElementById("payresult").textContent="You have not selected the payment type yet";
    }
}