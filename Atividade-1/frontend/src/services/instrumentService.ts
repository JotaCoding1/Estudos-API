import api from "./api";
import type { Instrument, InstrumentPayload } from "../models/instrument";

export async function getAllInstruments(): Promise<Instrument[]> {
  const response = await api.get<Instrument[]>("/instruments");
  console.log("Resposta")
  console.log(response.data)
  return response.data;
}

export async function createInstrument(payload: InstrumentPayload): Promise<Instrument> {
  const response = await api.post<Instrument>("/instruments", payload);
  console.log("Repostado Post")
  console.log(response.data)
  return response.data;
}

export async function updateInstrument(id: string, payload: InstrumentPayload): Promise<Instrument> {
  const response = await api.put<Instrument>(`/instruments/${id}`, payload);
  return response.data;
}

export async function deleteInstrument(id: string): Promise<void> {
  await api.delete(`/instruments/${id}`);
}
