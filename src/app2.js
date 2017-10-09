import React, { Component } from 'react';
// import $ from 'jquery';
import AddAppointment from './component/AddAppointment';
import AppList from './component/AppList';
// import axios from 'axios';
import myData from './data.json';
import SearchAppointment from './component/SearchAppointment';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Hello world",
      myApp: [],
      queryText: '',
      searching: false
    }
    this.addItem = this.addItem.bind(this)
    this.searchApp = this.searchApp.bind(this)
  }
  componentDidMount() {
    var tempApts = myData;
      this.setState({
        myApp: tempApts
      }); //setState
  } //componentDidMount
  deleteItem(item){
    let allApp = this.state.myApp;
    var result = allApp.filter(function( obj ) {
      return obj !== item;
    });
    console.log(item, "all app")
    this.setState({
      myApp: result
    })
  }

  addItem(tempItem) {
    console.log(tempItem,"tem item")
    var tempApts = this.state.myApp;
    tempApts.push(tempItem);
    console.log(tempApts, "input value")
    this.setState({
      myApp: tempApts
    }); //setState
  } //addItem


  

  searchApp = (event) => {
    var updatedList = this.state.myApp;
    console.log(updatedList,"update list")
    //Filter array
    updatedList = updatedList.filter(function(item){
      //Return items only match with event.target.value  
      return item.petName.toString().toLowerCase().search(event.toLowerCase()) !== -1 || item.ownerName.toString().toLowerCase().search(event.toLowerCase()) !== -1 || item.aptDate.toString().toLowerCase().search(event.toLowerCase()) !== -1 || item.aptNotes.toString().toLowerCase().search(event.toLowerCase()) !== -1;
    });
    
    //if input value empty 
    if(event === ''){
      this.setState({
        searching: false
      })
    }else{
      this.setState({
        searching: true,
        filterApp: updatedList
      })
    }
    
    console.log(event,"target value")
  }

  // searchApp(){
    // console.log("search method call");
    // let myApp = state.myApp;
    // console.log("search handle change fire", searchList)
    // let searchList = myApp.filter((item) => {
      
    //   return item.toString().toLowerCase().search(action.payload) !== -1
    // })
  // }

  render() {

    let appData = this.state.myApp; 
    appData = appData.map((data, index) => {
        return (
          <AppList item={data} key={index} onDelete={() => this.deleteItem(data)}/>
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
        <AddAppointment addApp={this.addItem}/>
        <SearchAppointment onSearch={this.searchApp}/>
        <ul className="item-list media-list">
          {appData}
          {/* {this.state.searching ? filterData: appData} */}
        </ul>
      </div>
    );
  }
}

export default App;
