export function allActions(history, setPlanet) {
  return [
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
        console.log(`redirect to grid with ${row.residents.length} Residents`);
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
  ];
}
