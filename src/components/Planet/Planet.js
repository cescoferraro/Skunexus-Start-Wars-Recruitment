import {useHistory, useParams} from "react-router-dom";
import React from "react";
import {useQuery} from "react-query";

export function usePlanetsQuery(id) {
    return useQuery(['planet', id], () => fetch(`https://swapi.dev/api/planets/${id}`).then((res) => res.json()))
}

export const Planet = () => {
    let {id} = useParams();
    let {isLoading, data} = usePlanetsQuery(id);
    const history = useHistory()
    return isLoading ? (
        <div>
            <h2>loading planet</h2>
        </div>

    ) : (
        <div>
            <h2>{data.name}</h2>
            <h4>Climate: {data.climate}</h4>
            <button onClick={()=>history.push("/")}>
                Back to Planets
            </button>
        </div>
    );
}
