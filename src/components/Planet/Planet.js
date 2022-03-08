import { useHistory, useParams } from "react-router-dom";
import React from "react";
import { usePlanetsQuery } from "./usePlanetsQuery";
import { Button } from "reactstrap";

const Planet = () => {
  const { id } = useParams();
  const { isLoading, data } = usePlanetsQuery(id);
  const history = useHistory();
  return isLoading ? (
    <div>
      <h2>loading planet</h2>
    </div>
  ) : (
    <div>
      <h2>{data.name}</h2>
      <h4>Climate: {data.climate}</h4>
      <Button onClick={() => history.push("/")}>Back to Planets</Button>
    </div>
  );
};
export default Planet;
