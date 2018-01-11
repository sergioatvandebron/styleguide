import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Table extends Component {
  getClass() {
    const classes = ["Van-Table"];

    if (this.props.full) {
      classes.push("Van-Table--full");
    }

    return classes.join(" ").trim();
  }

  render() {
    return (
      <table className={this.getClass()}>
        <thead className="Van-Table-head">
          <tr>
            {this.props.columns.map(column => (
              <th
                key={column.value}
                className="Van-Table-headCell"
                {...column.props}
              >
                {column.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="Van-Table-body">
          {this.props.rows.map(row => (
            <tr key={row} className="Van-Table-row" {...row.props}>
              {row.cells.map(cell => (
                <th key={cell.value} className="Van-Table-cell" {...cell.props}>
                  {cell.value}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {this.props.footer.map(row => (
            <tr key={row} className="Van-Table-footerRow" {...row.props}>
              {row.cells.map(cell => (
                <td
                  key={cell.value}
                  className="Van-Table-footerCell"
                  {...cell.props}
                >
                  {cell.value}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    );
  }
}

Table.defaultProps = {
  columns: [],
  rows: [],
  footer: [],
  className: "",
  full: false
};

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  footer: PropTypes.arrayOf(PropTypes.object),
  full: PropTypes.bool
};

export default Table;
