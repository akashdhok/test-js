function average()
{
    let num1 = parseInt(window.prompt("Enter first number "))
    let num2 = parseInt(window.prompt("Enter second number "))
    let num3 = parseInt(window.prompt("Enter third number "))
    let total = num1 + num2 + num3
    let average = total/3
   window.alert("Average = " + average)
}
average()