import Grid from "../Grid";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { usePlanetsQuery } from "./usePlanetsQuery";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";
import EditPlanetModal from "./EditPlanetModal/EditPlanetModal";
import PropTypes from "prop-types";
import { allHeaders } from "./allHeaders";
import { allActions } from "./allActions";

function Planets({ headers = [] }) {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [planet, setPlanet] = useState(undefined);
  const { data, isFetching } = usePlanetsQuery(page, setPage);
  const header = allHeaders(headers);
  const actions = allActions(history, setPlanet);
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {planet !== undefined && (
        <EditPlanetModal
          planet={planet}
          onClose={() => setPlanet(undefined)}
          header={header}
        />
      )}
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <Grid data={{ header, values: data?.results || [], actions }} />
      )}
      <div>
        <ButtonToolbar>
          <ButtonGroup>
            {Array.from({ length: data?.count / 10 }, (_, i) => i + 1).map(
              (p) => (
                <Button key={p} onClick={() => setPage(p)}>
                  {p}
                </Button>
              )
            )}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
}

Planets.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["number", "array"]),
    })
  ),
};

export default Planets;
