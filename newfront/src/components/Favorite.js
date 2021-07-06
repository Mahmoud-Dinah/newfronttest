import axios from 'axios';
import React, { Component } from 'react';
import ApiCrudData from './ApiCrudData';
import CrudUpdateForm from './CrudUpdateForm';

export class Favorite extends Component {
    constructor(props){
        super(props)
        this.state={
            url: process.env.REACT_APP_SERVER_URL,
            apiCrudData: [],
            showApiCrudCompnonet: false,
            message: "",
            showApiMessage: false,
            level:'',
            name:'',
            showUpdateForm: false
        };
    }
    componentDidMount = async () =>{
            const request = await axios.get(`${this.state.url}/allhero/fav`);
            this.setState({
                apiCrudData: request.data,
                showApiCrudCompnonet:true
            })
    }
    deleteItem = async (name) => {
        const request = await axios.delete(`${this.state.url}/allhero/fav/${name}`)
        this.setState({
            apiCrudData:request.data
        })
    }
    ShowUpdateForm = async (level, name) => {
        this.setState({
           level:level,
           name:name,
           showUpdateForm:true 
        })
    }
updateLevelState = (e) => this.setState({level: e.target.value})
updateItem = async (e) => {

    e.preventDefault();

    const request = await axios.put(`${this.state.url}/allhero/fav/${this.state.name}` , {level:this.state.level})

    this.setState({
        apiCrudData:request.data
    })}

 render() {
        return (
            <>
              {this.state.showApiCrudCompnonet &&
              <ApiCrudData 
              apiCrudData={this.state.apiCrudData}
              deleteItem={this.deleteItem}
              ShowUpdateForm={this.ShowUpdateForm}
              />
              }  

              {this.state.showUpdateForm &&
                <CrudUpdateForm
                updateLevelState={this.updateLevelState}
                updateItem={this.updateItem}
                level={this.state.level}
                />
                
              }
            </>
        )
    }
}

export default Favorite
