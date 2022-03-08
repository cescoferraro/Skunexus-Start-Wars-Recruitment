import {useQuery} from "react-query";

export function useFetchMultipleQuery(key, films = []) {
    return useQuery([key, ...films], () =>
        Promise.allSettled(
            films.map(url => fetch(url).then(res =>
                    res.json()
                )
            )
        )
    )
}
