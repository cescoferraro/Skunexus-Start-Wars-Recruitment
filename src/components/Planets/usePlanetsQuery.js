import {useQuery} from "react-query";

export function usePlanetsQuery() {
    return useQuery('planetsList', () =>
        fetch('https://swapi.dev/api/planets/').then(res =>
            res.json()
        )
    );
}
