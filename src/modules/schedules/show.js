import dayjs from "dayjs";

// Selecionas as sessões manha, tarde e noite
const periodMoorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules}){
  try{
    // Limpa as sessões
    periodMoorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""


    // Redenrinzar os agendamentos
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adiciona o ID do agendamento
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Criar o icone de concelar o agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Adicionar o tempo, nome e icone no item
      item.append(time, name, cancelIcon)

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour()


      // Renderizar o agendamento na sessão (manha, tarde ou noite)
      if(hour <=12){
        periodMoorning.appendChild(item)
      }else if(hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      }else{
        periodNight.appendChild(item)
      }
    })

  }catch(error){
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}