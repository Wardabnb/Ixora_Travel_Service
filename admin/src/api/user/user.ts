import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetAdmin() {
  return useQuery({
    queryKey: ["admins"],
    queryFn: async () =>
      (
        await axios.post("http://localhost:1000/admin/all", {
          password: "1234",
          email: "admin@gmail.com",
        })
      ).data,
  });
}
