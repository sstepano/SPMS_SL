import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddPortfolioAlert extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const newPortfolioName = this.props.newPortfolioName
        return (
            <Dialog
                open={this.props.showPortfolio}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create new portfolio</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="newPortfolioName"
                        label="Enter the portfolio name"
                        type="text"
                        value={newPortfolioName}
                        fullWidth
                        onChange={this.props.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => this.props.addNewPortfolio(newPortfolioName)} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
export default AddPortfolioAlert;
