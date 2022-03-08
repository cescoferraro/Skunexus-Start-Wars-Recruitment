import './Planets.css';

import Grid from '../Grid';
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {usePlanetsQuery} from "./usePlanetsQuery";
import {changePageFN} from "./changePageFN";


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
                                history.push("/films", {films: row.films,name: row.name})
                            }
                        },
                        {
                            label: 'Go to Residents',
                            action: (row) => {
                                console.log(`redirect to grid with ${row.residents.length} Residents`)
                                history.push("/residents",{residents: row.residents, name: row.name})
                            }
                        },
                        {
                            label: 'Go to Planet',
                            action: (row) => {
                                const split = row.url.split("/");
                                const id = split[split.length - 2];
                                history.push(`/planet/${id}`)
                            }
                        }
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
