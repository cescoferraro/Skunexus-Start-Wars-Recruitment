import './Grid.css';
import {Button, Table} from "reactstrap";

function Grid({data: {header = [], values = [], actions = []}}) {
    const hasActions = !!actions.length;
    return (
        <Table striped={true} className='gridTable'>
            <thead>
            <tr>
                {header.map(colName => <th key={`${colName}-header`}>{colName}</th>)}
                {hasActions && <th>Actions</th>}
            </tr>
            </thead>
            <tbody>
            {values.map((row, index) => {
                return (
                    <tr key={row.url} style={{height: 100}}>
                        {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
                        {hasActions &&
                            <td className='gridActions'>
                                {actions.map(({label, action, show}) => {
                                        if (show) {
                                            if (!show(row)) {
                                                return
                                            }
                                        }
                                        return <Button
                                            color={"primary"}
                                            key={`${label}-${index}`}
                                            onClick={() => action(row)}

                                            icon="navbar-toggler-icon"
                                        >
                                            {label}
                                        </Button>;
                                    }
                                )}
                            </td>
                        }
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}

export default Grid;
