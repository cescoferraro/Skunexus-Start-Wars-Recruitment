import { useQuery } from "react-query";

const fetchProjects = (page = 0) =>
  fetch("https://swapi.dev/api/planets?page=" + page).then((res) => res.json());

export function usePlanetsQuery(page) {
  return useQuery(["planets", Number(page)], () => fetchProjects(page), {
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 24 * 365,
    cacheTime: 1000 * 60 * 60 * 24 * 365,
  });
}
