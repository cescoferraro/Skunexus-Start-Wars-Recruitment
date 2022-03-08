import Grid from "../Grid";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { usePlanetsQuery } from "./usePlanetsQuery";
import { changePageFN } from "./changePageFN";
import { Button } from "reactstrap";
import EditPlanetModal from "./EditPlanetModal";
import PropTypes from "prop-types";

function Planets({ headers = [] }) {
  console.log(headers);
  const [page, setPage] = useState(1);
  const [planet, setPlanet] = useState(undefined);
  const { data } = usePlanetsQuery(page, setPage);
  const changePage = changePageFN(page, setPage, data?.count / 10);
  const history = useHistory();
  const onClose = () => setPlanet(undefined);
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {planet !== undefined && (
        <EditPlanetModal planet={planet} onClose={onClose} />
      )}
      <Grid
        data={{
          header: [
            { name: "name" },
            { name: "rotation_period", type: "number" },
            { name: "orbital_period", type: "number" },
            { name: "diameter", type: "number" },
            { name: "climate" },
            { name: "gravity" },
            { name: "terrain" },
            { name: "surface_water", type: "number" },
            ...headers,
          ],
          values: data?.results || [],
          actions: [
            {
              label: "Go to Films",
              show: (row) => row.films.length > 0,
              action: (row) => {
                console.log(`redirect to grid with ${row.films.length} Films`);
                history.push("/films", { films: row.films, name: row.name });
              },
            },
            {
              label: "Go to Residents",
              show: (row) => row.residents.length > 0,
              action: (row) => {
                console.log(
                  `redirect to grid with ${row.residents.length} Residents`
                );
                history.push("/residents", {
                  residents: row.residents,
                  name: row.name,
                });
              },
            },
            {
              label: "Edit Planet",
              action: (row) => {
                setPlanet(row);
              },
            },
            {
              label: "Go to Planet",
              action: (row) => {
                const split = row.url.split("/");
                const id = split[split.length - 2];
                history.push(`/planet/${id}`);
              },
            },
          ],
        }}
      />
      <div>
        <Button onClick={changePage("previous")}>{"<<"}</Button>
        {page}
        <Button onClick={changePage("next")}>{">>"}</Button>
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
