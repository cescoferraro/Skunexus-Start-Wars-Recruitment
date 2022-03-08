import './Residents.css';

import Grid from '../Grid';
import {useHistory, useLocation} from "react-router-dom";
import {useFetchMultipleQuery} from "../hooks/useFetchMultipleQuery";
import {useRedirectToPlanetsIfNoStateEffect} from "../hooks/useRedirectToPlanetsIfNoStateEffect";


function Residents() {
    const history = useHistory()
    const location = useLocation()
    const {data} = useFetchMultipleQuery("residents", location.state?.residents);
    useRedirectToPlanetsIfNoStateEffect(location, history);
    return (
        <div className='App'>
            <Grid
                data={{
                    header: [
                        'name',
                    ],
                    values: data?.map(promise => promise.value) || [],
                    actions: [
                        {
                            label: 'Go to Planets',
                            action: () => {
                                history.push("/")
                            }
                        },
                    ]
                }}
            />
        </div>
    );
}

export default Residents;
