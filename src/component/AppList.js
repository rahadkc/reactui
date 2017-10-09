import React, { Component } from 'react';
class AppList extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
    }
    editApp(){
        this.props.editItem(this.props.item)
    }
    render() {
        return (
            
            <li className="pet-item media">
                <div className="media-left">
                <button className="pet-delete btn btn-xs btn-danger" onClick={this.props.onDelete}>
                <span className="glyphicon glyphicon-remove"></span></button>
                </div>
                <div className="pet-info media-body">
                <div className="pet-head">
                    <span className="pet-name">{this.props.item.petName}</span>
                    <span className="apt-date pull-right">{this.props.item.aptDate}</span>
                </div>
                <div className="owner-name"><span className="label-item">Owner:</span>
                {this.props.item.ownerName}</div>
                <div className="apt-notes">{this.props.item.aptNotes}</div>
                    <span className="edit" onClick={() => this.editApp()}>Edit</span>
                </div>
            </li>
        )
        
    }
}

export default AppList;