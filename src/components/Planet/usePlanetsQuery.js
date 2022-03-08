import { useQuery } from "react-query";

export function usePlanetsQuery(id) {
  return useQuery(["planet", id], () =>
    fetch(`https://swapi.dev/api/planets/${id}`).then((res) => res.json())
  );
}
