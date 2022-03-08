import './Planets.css';

import Grid from '../Grid';
import {useHistory} from "react-router-dom";
import {useQuery} from "react-query";
import {useState} from "react";

const fetchProjects = (page = 0) => fetch('https://swapi.dev/api/planets?page=' + page).then((res) => res.json())


function usePlanetsQuery(page) {
    return useQuery(['planets', page], () => fetchProjects(page), {keepPreviousData: true})
}

function changePageFN(page, setPage, pages) {
    return mode => () => {
        let number = mode === "next" ? page + 1 : page - 1;
        if (number > 0 && number <= pages) {
            setPage(number)
        }
    };
}

function Planets() {
    const [page, setPage] = useState(1)
    const {data} = usePlanetsQuery(page, setPage);
    const changePage = changePageFN(page, setPage, data?.count / 10);
    const history = useHistory()
    return (
        <div className='App'>
            <Grid
                data={{
                    header: [
                        'name',
                        'rotation_period',
                        'orbital_period',
                        'diameter',
                        'climate',
                        'gravity',
                        'terrain',
                        'surface_water',
                        'population'
                    ],
                    values: data?.results || [],
                    actions: [
                        {
                            label: 'Go to Films',
                            action: (row) => {
                                console.log(`redirect to grid with ${row.films.length} Films`)
                                history.replace("/films", {films: row.films,name: row.name})
                            }
                        },
                        {
                            label: 'Go to Residents',
                            action: (row) => {
                                console.log(`redirect to grid with ${row.residents.length} Residents`)
                                history.replace("/residents",{residents: row.residents,name: row.name})
                            }
                        },
                    ]
                }}
            />
            <div>
                <button onClick={changePage("previous")}>{"<<"}</button>
                {page}
                <button onClick={changePage("next")}>{">>"}</button>
            </div>
        </div>
    );
}

export default Planets;
