import React, {Component} from 'react';
import {Platform, ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = { isLoading:false, dataSource: []};
  }

  getJedi() {
  this.setState({isLoading:true})
  return fetch('https://swapi.co/api/people/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({
          dataSource: responseJson.results,
          isLoading: false
      })
      console.log(this.state.dataSource) //empty array
    })
    .catch((error) => {
      console.error(error)
      this.setState({isLoading:false})
    })
  }
  
  getBolygo() {
  this.setState({isLoading:true})  
  return fetch('https://swapi.co/api/planets/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
          dataSource: responseJson.results,
          isLoading: false
      })
      console.log(this.state.dataSource) //empty array
    })
    .catch((error) => {
      console.error(error)
      this.setState({isLoading:false})
    })
  }

  getJarmu() {
  this.setState({isLoading:true})  
  return fetch('https://swapi.co/api/vehicles/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
          dataSource: responseJson.results,
          isLoading: false
      })
      console.log(this.state.dataSource) //empty array
    })
    .catch((error) => {
      console.error(error)
      this.setState({isLoading:false})
    })
  }

  list() {
    if (this.state.isLoading===true) { 
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
      console.log('nemírja')
    } else {
      if (this.state.dataSource){
        console.log('kiírja')
        return(
          <View style={{flex:1}}>

        {this.state.dataSource.map((item, i) => {
          console.log(item)
          return (                    
            <View style={styles.nameStyle}>
                <Text style={styles.textStyle}>
                  {item.name}
                </Text>
            </View>
          )
          
        })}
            </View>

        )
      }
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.headerStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.getJedi()}>
              <Text style={styles.buttonText}> Jedik </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.getBolygo()}>
              <Text style={styles.buttonText}> Bolygók </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.getJarmu()}>
              <Text style={styles.buttonText}> Járművek </Text>
            </TouchableOpacity>
        </View>
          {this.list()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    height: 60,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    marginLeft: 15,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    backgroundColor: '#003ba8',
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    left: -10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  container:{
    flex:1
  },
  textStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
  },
  nameStyle: {
    backgroundColor: '#ddd',
    height: 20,
    borderColor: 'blue',
  }
});