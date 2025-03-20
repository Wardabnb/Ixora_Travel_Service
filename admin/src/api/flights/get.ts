import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetFlights(numPage: string) {
  return useQuery({
    queryKey: ["flights"],
    enabled: !!numPage,
    queryFn: async () =>
      (await axios.get("http://localhost:1000/flights?page=" + numPage)).data,
  });
}
