
function tax(){
    let salary = parseInt(window.prompt("Enter your salary"));

    if(salary<350000){
        window.alert("Package is less than 3.5lakh so you dont want to pay");
    }
    else if(salary >=350000 && salary<750000){
        let tax = (salary/100)*10;
        window.alert("You have to pay " + tax + " on your package");
    }
    else if(salary>=750000){
        let tax = (salary/100)*20;
        window.alert("You have to pay " + tax + " on your package");
    }
}

tax();
