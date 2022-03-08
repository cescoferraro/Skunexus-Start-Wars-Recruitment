import {useEffect} from "react";

export function useRedirectToPlanetsIfNoStateEffect(location, history) {
    useEffect(() => {
        if (location.state === undefined) history.push("/")
    }, [location, history])
}
