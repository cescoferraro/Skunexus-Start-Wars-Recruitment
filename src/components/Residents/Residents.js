import './Residents.css';

import Grid from '../Grid';
import {useHistory, useLocation} from "react-router-dom";
import {useFetchMultipleQuery} from "../hooks/useFetchMultipleQuery";
import {useRedirectToPlanetsIfNoStateEffect} from "../hooks/useRedirectToPlanetsIfNoStateEffect";
import {Button} from "reactstrap";


function Residents() {
    const history = useHistory()
    const location = useLocation()
    const {data} = useFetchMultipleQuery("residents", location.state?.residents);
    useRedirectToPlanetsIfNoStateEffect(location, history);
    return (
        <div className='App'>
            <Grid
                data={{
                    header: ['name'],
                    values: data?.map(promise => promise.value) || [],
                }}
            />
            <Button
                onClick={() => {
                    history.push("/")
                }}
            >
                Back to Planets
            </Button>
        </div>
    );
}

export default Residents;
