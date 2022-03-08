import Grid from "../Grid";
import { useHistory, useLocation } from "react-router-dom";
import { useFetchMultipleQuery } from "../hooks/useFetchMultipleQuery";
import { useRedirectToPlanetsIfNoStateEffect } from "../hooks/useRedirectToPlanetsIfNoStateEffect";
import { Button } from "reactstrap";

function Films() {
  const history = useHistory();
  const location = useLocation();
  const query = useFetchMultipleQuery("films", location.state?.films);
  useRedirectToPlanetsIfNoStateEffect(location, history);
  return (
    <div className="App">
      <h1> Films that happen at {location.state?.name} Planet</h1>
      <Grid
        data={{
          header: [{ name: "title" }, { name: "director" }, { name: "url" }],
          values: query.data?.map((promise) => promise.value) || [],
        }}
      />
      <Button onClick={() => history.push("/planets")}>Back to Planets</Button>
    </div>
  );
}

export default Films;
