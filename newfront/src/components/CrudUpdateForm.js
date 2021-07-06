import React, { Component } from 'react'
export class CrudUpdateForm extends Component {
    render() {
        return (
        <div>
            <form onSubmit={this.props.updateItem}>
                <input onChange={this.props.updateLevelState} type="text" value={this.props.level} />
                <input type="submit" value="update Data" />
            </form>
        </div>
              )
                }}
export default CrudUpdateForm
