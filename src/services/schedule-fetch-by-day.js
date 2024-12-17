import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}){
  try {
    // Fazendo a requisição para a API
    const response = await fetch (`${apiConfig.baseURL}/schedules`)

    // Converte para  JSON
    const data = await response.json()

    // Filtrar os agendamentos do dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules;

  }catch(error){
    console.log(error);
    console.log("Não foi possível buscar os agendamentos do dia selecionado");
  }
}