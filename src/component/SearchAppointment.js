import React, { Component } from 'react';

class SearchAppointment extends Component {
    constructor(){
        super();
        this.handleSearch = this.handleSearch.bind(this)
        this.handleOrder = this.handleOrder.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }
    state = {  }
    handleSort(e){
        e.preventDefault();
        console.log(this.props.onReOrder, "handle sort")
        this.props.onReOrder(e.target.id, this.props.orderDir)
    }
    handleOrder(e){
        e.preventDefault();
        console.log(this.props.onReOrder, "handle order")
        this.props.onReOrder(this.props.orderBy, e.target.id)
    }
    handleSearch(e){
        console.log(e.target.value, "input value")
        let event = e.target.value;
        this.props.onSearch(event);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row search-appointments">
                    <div className="col-sm-offset-3 col-sm-6">
                    <div className="input-group">
                        <input id="SearchApts" onChange={ this.handleSearch } placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
                        <div className="input-group-btn dropup-">
                        <button type="button" className="btn dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="" id="petName" onClick={ this.handleSort }>Pet Name { (this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            <li><a href="" id="aptDate" onClick={ this.handleSort }>Date { (this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            <li><a href="" id="ownerName" onClick={ this.handleSort }>Owner { (this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="" id="asc" onClick={ this.handleOrder }>Asc { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            <li><a href="" id="desc" onClick={ this.handleOrder }>Desc { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAppointment;