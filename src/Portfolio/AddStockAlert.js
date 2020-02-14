import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddStockAlert extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const stockSymbol = this.props.stockSymbol
        const stockQuantity = this.props.stockQuantity
        return (
            <Dialog
        open={this.props.show}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Add new stock</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                name="newStockSymbol"
                label="Enter the stock symbol"
                type="text"
                value={stockSymbol}
                fullWidth
                onChange={this.props.handleChange}
            />
            <TextField
                margin="dense"
                name="newStockQuantity"
                label="Number of shares"
                type="number"
                value={stockQuantity}
                fullWidth
                onChange={this.props.handleChange}
            />
        </DialogContent>
        <DialogActions>
        <Button onClick={this.props.handleClose} color="primary">
            Cancel
            </Button>
        <Button onClick={() => this.props.addStock(stockSymbol, stockQuantity)} color="primary">
            OK
        </Button>
        </DialogActions>
    </Dialog>
        )
    }
}
export default AddStockAlert;
