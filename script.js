//array global -
var local = [];

$(document).ready(function(){
  //Salvar cidade e estado
  $('#btnSalvar').click(function(){
    var cidade = $('input[id=cidade]').val();
    var estado = $('input[id=estado]').val();
    //validações
    if (cidade.length > 0 && estado.length > 0)
    {
      //salva no array e localStorage
      local[local.length] = {cidade: cidade, estado: estado};
      localStorage.setItem('local', JSON.stringify(local));
      //limpa os campos
      $('#cidade, #estado').val('');
      alert("Cadastro realizado com sucesso!");
    }
    else
      alert("Preencha os campos corretamente.");
  });


});
