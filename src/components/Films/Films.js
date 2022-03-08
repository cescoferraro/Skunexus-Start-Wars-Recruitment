import './Films.css';

import Grid from '../Grid';
import {useHistory, useLocation} from "react-router-dom";
import {useFetchMultipleQuery} from "../hooks/useFetchMultipleQuery";
import {useRedirectToPlanetsIfNoStateEffect} from "../hooks/useRedirectToPlanetsIfNoStateEffect";

function Films() {
    const history = useHistory()
    const location = useLocation()
    const query = useFetchMultipleQuery("films", location.state?.films)
    useRedirectToPlanetsIfNoStateEffect(location, history)
    return (
        <div className='App'>
            <h1> Films that happen {location.state?.name} Planet</h1>
            <Grid
                data={{
                    header: [
                        'title',
                        'director',
                        'url',
                    ],
                    values: query.data?.map(promise => promise.value),
                    actions: [
                        {
                            label: 'Go to Planets',
                            action: () => {
                                console.log(history);
                                history.push("/")
                            }
                        },
                    ]
                }}
            />
        </div>
    );
}

export default Films;
