      let inputAdultos = document.getElementById("adultos");
      let inputCriancas = document.getElementById("criancas");
      let inputDuracao = document.getElementById("duracao");
     
      let resultado=document.getElementById("resultado");

      function calcular(){
         console .log("calculando...");

         let adultos = inputAdultos.value;
         let criancas = inputCriancas.value;
         let duracao = inputDuracao.value;
         let QuantCarneTotal= carnePP(duracao) * adultos + ( carnePP(duracao)/2 * criancas);
         let QuantCervejaTotal= cervejaPP(duracao) * adultos ;
         let QuantBebidaTotal= BebidaPP(duracao) * adultos + ( BebidaPP(duracao)/2 * criancas);
       
         resultado.innerHTML = `<p>${QuantCarneTotal/1000}kg de Carne</p>`
         resultado.innerHTML += `<p>${QuantCervejaTotal/1000}L de Cerveja</p>`
         resultado.innerHTML += `<p>${QuantBebidaTotal/1000}L de Bebidas</p>`
      }

      function carnePP(duracao) {
        if (duracao >= 6){
            return 650;
        }
        else {
            return 400;
        }
        
      }
      function cervejaPP(duracao) {
        if (duracao >= 6){
            return 2000;
        }
        else {
            return 1200;
        }
        
      }
      function BebidaPP(duracao) {
        if (duracao >= 6){
            return 1500;
        }
        else {
            return 1000;
        }
        
      }