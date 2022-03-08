import {useQuery} from "react-query";

const fetchProjects = (page = 0) => fetch('https://swapi.dev/api/planets?page=' + page).then((res) => res.json())

export function usePlanetsQuery(page) {
    return useQuery(['planets', page], () => fetchProjects(page), {keepPreviousData: true})
}
