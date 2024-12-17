import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectDate = document.getElementById("date")
export async function schedulesDay(){
  // Obtem a data do input
  const date = selectDate.value

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({ dailySchedules })

  // Renderiza as horas disponiveis.
  hoursLoad({ date, dailySchedules })

}