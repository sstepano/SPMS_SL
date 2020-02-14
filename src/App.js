import React, {Component} from 'react';
import './App.css';
import Portfolio from "./Portfolio/Portfolio";
import AddPortfolioAlert from "./Portfolio/AddPortfolioAlert";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPortfolioName: "",
            portfolios: [],
            showPortfolio: false,
            EurToUSD: 1.0,
        };
        this.addNewPortfolio = this.addNewPortfolio.bind(this);
        this.removePortfolio = this.removePortfolio.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    /*fetch the exchange rate from Eur to USD from alphavantage and set it to EurToUSD state
    fetch portfolionmes from local storage and set them to portfolios state*/
    componentDidMount() {
        const url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=OHK5U5NEHY5FSE6A";
        axios.get(url).then (response => this.setState({EurToUSD: response.data}))
        const portfolioNames = Object.keys(localStorage);
        this.setState({
            portfolios: portfolioNames
        })
    }

    /*adds new portfolio to portfolios state if there are less than 10 portfolios*/
    addNewPortfolio(name) {
        const portfolios = this.state.portfolios;
        if(portfolios.length < 10) {
            if (name.length > 0) {
                portfolios.push(name);
                this.setState({
                    portfolios: portfolios
                });
                this.handleClose()
                localStorage.setItem(name, JSON.stringify([])) /*add the new portfolio to local storage*/
                /*empty the text field in the AddPortfolioAlert window*/
                this.setState({
                    newPortfolioName: "",
                });
            }
        }
        else {
            alert("You can only have 10 portfolios")
            this.setState({
                newPortfolioName: "",
            });
            this.handleClose()
        }
    }

    /*removes the portfolio from portfolios state and from local storage*/
    removePortfolio(name) {
        const portfolios = this.state.portfolios;
        portfolios.splice(portfolios.indexOf(name), 1)
        this.setState({
            portfolios: portfolios
        });
        localStorage.removeItem(name)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    /*close the AddPortfolioAlert window*/
    handleClose = () => {
        this.setState({showPortfolio: false});
    };

    render() {
        return (
            <div className="App">
                <button onClick={() => this.setState({showPortfolio: true})} className="portfolioBtn">Add new portfolio</button>
                <AddPortfolioAlert
                    showPortfolio={this.state.showPortfolio}
                    addNewPortfolio={(name) => this.addNewPortfolio(name)}
                    newPortfolioName={this.state.newPortfolioName}
                    handleChange={this.handleChange}
                    handleClose={this.handleClose}
                />
                <div>
                {this.state.portfolios.map(portfolioName =>
                    <Portfolio
                        key={portfolioName}
                        name={portfolioName}
                        removePortfolio={(name) => this.removePortfolio(name)}
                        EurToUSD={this.state.EurToUSD}
                    />
                )}
                </div>


            </div>
        )
    }
}

export default App;
