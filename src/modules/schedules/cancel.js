import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll('.period')

//Gera evento de click para cada lista manha, tarde e noite
periods.forEach((periods) => {
  // captura o evento de click na lista
  periods.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");

      // Pega o ID do agendamento para remover
      const { id } = item.dataset

      // Confirma que o ID foi selecionado
      if(id){
        // Confirma se o usuário deseja cancelar o agendamento
        const isConfirm = confirm("Deseja realmente cancelar este agendamento?")

        if(isConfirm){
          // faz a requisição para cancelar o agendamento
          await scheduleCancel({ id })

          // Atualiza a lista de agendamentos
          schedulesDay()

        }
      }
    }
  })
})