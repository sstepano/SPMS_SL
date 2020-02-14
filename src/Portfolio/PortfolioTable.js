import React, {Component} from 'react';

class PortfolioTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const stocks = this.props.stockTable;
        return (
            <div className="tableOfStocks">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unit value</th>
                        <th>Quantity</th>
                        <th>Total value</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stocks.map(stock => <tr key={stock.name}>
                        <td>{stock.name}</td>
                        <td>{stock.unitValue}{this.props.currency}</td>
                        <td>{stock.quantity}</td>
                        <td>{stock.totalValue}{this.props.currency}</td>
                        <td>
                            <input type="checkbox" onChange={() => this.props.checkboxClick(stock.name)}/>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default PortfolioTable;
