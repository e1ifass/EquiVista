import React, { Component } from 'react';
import { iex } from '../config/iex.js';

class StockRow extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }




    componentDidMount() {
        const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        
        try{
            fetch(url)
                .then((response) => {
                    if (!response.ok){
                        throw new Error("Netword respnse was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    this.setState({
                        data: data[data.length - 1]
                    })
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
        } catch (error) {
            console.error("Unexpected error:", error);
        } finally {

        }

    }
    render(){
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.close}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.label}</td>
            </tr>
        )
    }
}

export default StockRow;