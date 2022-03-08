import { Button, Table } from "reactstrap";
import PropTypes from "prop-types";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  const hasActions = !!actions.length;
  return (
    <Table striped={true} className="gridTable">
      <thead>
        <tr>
          {header.map(({ name, type }) => {
            return (
              <th key={`${name}-header`}>
                {name} {type === "number" ? "(number)" : "(string)"}
              </th>
            );
          })}
          {hasActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => {
          return (
            <tr key={row.url} style={{ height: 100 }}>
              {header.map(({ name, type = "string" }) => {
                let rowElement = row[name];
                return (
                  <td
                    key={name}
                    style={{
                      textAlign: type === "number" ? "right" : undefined,
                    }}
                  >
                    {type === "array" ? rowElement.length : rowElement}
                  </td>
                );
              })}
              {hasActions && (
                <td className="gridActions">
                  {actions.map(({ label, action, show }) => {
                    if (show) {
                      if (!show(row)) {
                        return null;
                      }
                    }
                    return (
                      <Button
                        color={"primary"}
                        key={`${label}-${index}`}
                        onClick={() => action(row)}
                        icon="navbar-toggler-icon"
                      >
                        {label}
                      </Button>
                    );
                  })}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

Grid.propTypes = PropTypes.shape({
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  values: PropTypes.arrayOf(PropTypes.any).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
      show: PropTypes.bool,
    })
  ),
}).isRequired;

export default Grid;
