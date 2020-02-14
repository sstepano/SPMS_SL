import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Plot from 'react-plotly.js';

class AddPerfGraphAlert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const stockValues = this.props.stockValues;
        const colorArray = ['red', 'green', 'blue', 'black', 'yellow', 'magenta', 'cyan', 'purple', 'brown', 'orange'];
        /*create data (plot) for all stocks in the portfolio*/
        const data = stockValues.map((stockValue,index) => {
            return {
                x: stockValue.x,
                y: stockValue.y,
                type: 'scatter',
                mode: 'lines+points',
                marker: {color: colorArray[index % 10]},
                name: stockValue.name,
            }
        });
        return (
            <Dialog
                open={this.props.showGraph}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="md"
            >
                <DialogTitle id="form-dialog-title">{this.props.portfolioName}</DialogTitle>
                <DialogContent>
                    <Plot
                        data={data}
                        layout={{width: 600, height:400}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default AddPerfGraphAlert;
