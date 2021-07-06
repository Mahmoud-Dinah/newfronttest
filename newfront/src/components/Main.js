import axios from "axios";
import React, { Component } from "react";
import ApiDataPage from "./ApiDataPage";

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiWholeData: [],
            showApiDataCompnonet: false,
            message: "",
            showApiMessage: false,
        };
    }
    componentDidMount = async () => {
        await axios
            .get(`${this.state.url}/allhero`)
            .then((response) => {
                this.setState({
                    apiWholeData: response.data,
                    showApiDataCompnonet: true,
                });
            })
            .catch((error) => console.log(error));

        console.log(this.state.apiWholeData);
    };

    addToFavorite = async (dataObj) => {
        const postRequest = await axios.post(
            `${this.state.url}/allhero/fav`,
            dataObj
        );
        this.setState({
            message: postRequest.data,
            showApiMessage: true,
        });
    };
    render() {
        return (
            <>
                {this.state.showApiMessage && <h3>{this.state.message}</h3>}

                {this.state.showApiDataCompnonet && (
                    <ApiDataPage
                        apiWholeData={this.state.apiWholeData}
                        addToFavorite={this.addToFavorite}
                    />
                )}
            </>
        );
    }
}
export default Main;
