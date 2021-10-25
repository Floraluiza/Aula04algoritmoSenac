var idade = parseInt(prompt('Informe sua idade '))

if(idade<=0){
  alert('Idade inválida')
}
else{
if(idade >= 18){
      alert('Você tem ' + idade + ' anos e pode digirir')
    }
    else{
      alert('Você tem ' + idade + ' anos e NÃO pode digirir ainda')
    }
}

