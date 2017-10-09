import React, { Component } from 'react';
// import $ from 'jquery';
import AddAppointment from './component/AddAppointment';
import AppList from './component/AppList';
// import axios from 'axios';
import myData from './data.json';
import _ from 'lodash';
import SearchAppointment from './component/SearchAppointment';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello world",
      myApp: [],
      queryText: '',
      showForm: false,
      orderBy: 'petName',
      orderDir: 'asc',
      selectedItem: [],
      searching: false,
      edit: false
    }
    this.addItem = this.addItem.bind(this)
    this.searchApp = this.searchApp.bind(this)
    this.reOrder = this.reOrder.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    var tempApts = myData;
    this.setState({
      myApp: tempApts
    }); //setState
  } //componentDidMount
  deleteItem(item) {
    let allApp = this.state.myApp;
    var result = allApp.filter(function (obj) {
      return obj !== item;
    });
    console.log(item, "all app")
    this.setState({
      myApp: result
    })
  }

  addItem(tempItem) {
    console.log(tempItem, "tem item")
    var tempApts = this.state.myApp;
    tempApts.push(tempItem);
    console.log(tempApts, "input value")
    this.setState({
      myApp: tempApts
    }); //setState
  } //addItem

  searchApp = (q) => {
    console.log(q, "q value  at search app")
    this.setState({
      queryText: q
    })
  }

  reOrder = (orderBy, orderDir) => {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }
  handleShow = () => {
    console.log("handle show called")
    let temVisible = !this.state.showForm;
    this.setState({
      showForm: temVisible
    })
  }

  handleEdit = (item) => {
    // let selectedItem = this.state.selectedItem;
    // selectedItem.push(item)
    this.setState({
      showForm: true,
      edit: true,
      selectedItem: item
    })
    
    console.log(item, "edit data")
  }
  render() {
    let appData = [];
    let queryText = this.state.queryText;
    let myApp = this.state.myApp;
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;

    myApp.forEach(function (item) {
      if (
        item.petName.toString().toLowerCase().search(queryText.toString().toLowerCase()) !== -1 || item.ownerName.toString().toLowerCase().search(queryText.toString().toLowerCase()) !== -1 || item.aptDate.toString().toLowerCase().search(queryText.toString().toLowerCase()) !== -1 || item.aptNotes.toString().toLowerCase().search(queryText.toString().toLowerCase()) !== -1
      ) {
        appData.push(item)
      }
    })

    appData = _.orderBy(appData, function (item) {
      return item[orderBy].toString().toLowerCase();
    }, orderDir);//orderBy

    appData = appData.map((data, index) => {
      return (
        <AppList item={data} key={index} editItem={this.handleEdit} edit={this.state.edit} formVisible={this.state.showForm} onDelete={() => this.deleteItem(data)} />
      );
    })

    // let filterData = this.state.filterApp; 
    // filterData = filterData.map((data, index) => {
    //     return (
    //       <AppList item={data} key={index} onDelete={() => this.deleteItem(data)}/>
    //     );
    // })

    return (
      <div className="interface">
        <AddAppointment addApp={this.addItem} selectedItem={this.state.selectedItem} showForm={this.handleShow} formVisible={this.state.showForm}/>
        <SearchAppointment
          onSearch={this.searchApp}
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          onReOrder={this.reOrder}
        />
        <ul className="item-list media-list">
          {appData}
          {/* {this.state.searching ? filterData: appData} */}
        </ul>
      </div>
    );
  }
}

export default App;
