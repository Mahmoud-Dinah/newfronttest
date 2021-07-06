import React, { Component } from 'react'

export class ApiCrudData extends Component {
    render() {
        return (
            this.props.apiCrudData.map((obj, idx)=> {
                    return (
                        <div key={idx}>
                            <h2>{obj.name}</h2>
                            <h2>{obj.level}</h2>
                            <img src = {obj.img} alt= " "/>
                            <br></br>
                            <br></br>
                            <button onClick={e => this.props.deleteItem(obj.name)}>Delete</button><br></br><br></br>
                            <button onClick={e => this.props.ShowUpdateForm(obj.level, obj.name)}>Show Update Form</button>
                        </div>

                  )
            })
           
        )
    }
}

export default ApiCrudData
