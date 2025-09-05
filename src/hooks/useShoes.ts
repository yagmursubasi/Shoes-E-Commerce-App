import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { shoesApi } from "../services/api";
import type { ShoeData } from "../types";

export function useShoes() {
  const queryClient = useQueryClient();
  const shoes = useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoesApi.getAll().then((res) => res.data),
  });

  const useShoe = (id: string) =>
    useQuery({
      queryKey: ["shoe", id],
      queryFn: () => shoesApi.getById(id).then((res) => res.data),
    });

  const create = useMutation({
    mutationFn: (data: ShoeData) => shoesApi.create(data),
    onSuccess: () => {
      //oluşturma işlemi başarılı olursa ekrandaki verilerin güncellenmesi için shaoes keyine sahip ayakkabı verilerini getiren query fonksiyonunu tetikliyoruz
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      alert("Shoe created successfully");
    },
  });

  const edit = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ShoeData }) =>
      shoesApi.edit(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      alert("Shoe edited successfully");
    },
  });
  const remove = useMutation({
    mutationFn: (id: string) => shoesApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      alert("Shoe deleted successfully");
    },
  });

  return { shoes, useShoe, create, edit, remove };
}
