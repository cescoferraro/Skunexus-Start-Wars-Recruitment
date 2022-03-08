import './Planets.css';

import Grid from '../Grid';
import {usePlanetsQuery} from "./usePlanetsQuery";

function Planets() {
    const query = usePlanetsQuery();
    let header = [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population'
    ];
    let actions = [
        {
            label: 'Go to Films',
            action: (row) => {
                console.log(`redirect to grid with ${row.films.length} Films`)
            }
        },
        {
            label: 'Go to Residents',
            action: (row) => {
                console.log(`redirect to grid with ${row.residents.length} Residents`)
            }
        }
    ];
    const data = {
        header,
        values: query.data?.results || [],
        actions
    }

    return (
        <div className='App'>
            <Grid data={data}/>
        </div>
    );
}

export default Planets;
