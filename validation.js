function validateForm() {
    var x = document.forms["myForm"]["revenues-twelve-months"].value;
    if (x == "") {
      alert("O campo de faturamento 12 meses deve ser preenchido");
      return false;
    }
    var x = document.forms["myForm"]["revenues-twelve-months"].value;
    if (parseFloat(parseFloat(x.replace(/\./g, "").replace(",","."))) > 4800000)  {
      alert("Valor acima do limete do Simples Nacional");
      return false;
    }

    var x = document.forms["myForm"]["revenue-month"].value;
    if (x == "") {
      alert("O campo de faturamento deve ser preenchido");
      return false;
    }
}

// document.getElementById("button").addEventListener("click", function(event){
//   event.preventDefault()
//   var x = document.forms["myForm"]["revenues-twelve-months"].value;
//   console.log(x)
//   console.log(x.replace(/\./g, ""))
//   console.log(parseFloat(x.replace(/\./g, "").replace(",",".")))
// });