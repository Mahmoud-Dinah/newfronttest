import React, { Component } from 'react'

export class ApiDataPage extends Component {
    render() {
        return (
           this.props.apiWholeData.slice(0,10).map((obj, idx)=>{
            return (
                <div key={idx}>
                    <h2>{obj.name}</h2>
                    <h3>{obj.level}</h3>
                    <img src= {obj.img} alt= " " />                           
                                                    
                     <button onClick={e => this.props.addToFavorite(obj)}> Add me to Favorite</button>                               
             </div>                                       
          )

           })
        )
    }
}

export default ApiDataPage
