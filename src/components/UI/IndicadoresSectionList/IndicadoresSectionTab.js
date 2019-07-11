import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SectionList,Dimensions, Image, StatusBar} from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import IndicadoresSectionList from "./IndicadoresSectionList";


const getSceneMap = (routes, scenes) => {
  let sceneMap = {}

  routes.forEach((route, index) => {
    sceneMap[route.key] = scenes[index]
  })

  return sceneMap;
};


 
export default class IndicadoresSectionTab extends Component {

  state = {
    index: 0,
    routes: [],
    scenes : [],
    render:false
  };

  constructor(props){
    super(props); 
    
   
  
  }  


  componentWillMount (){    
    
      var readRoutes=[];  
      var scenas=[];  
      this.props.dataSet.forEach(function(element) { 
          let arrayKey=element.key;        
          var localComponent=<IndicadoresSectionList dataArray={element.contenido}/>;
          //var localComponent=<Text>Hola este es el control de {element.nombreGrupo}</Text>;                    
          var json={key : element.nombreGrupo, title: element.nombreGrupo.toUpperCase() };
          readRoutes.push(json);
          scenas.push(()=>localComponent);
      });
      this.setState({routes:readRoutes}); 
      this.setState({scenes:scenas});
              
  }     


  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {    
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {          
          return (
            <TouchableOpacity key={route.key} style={styles.tabTouchable} onPress={() => this.setState({ index: i })}>
              <View style={styles.tabItem}>              
              {
                this.state.index===i
                ?
                <Text style={styles.textTitleSel} >{route.title}</Text>
                :
                <Text style={styles.textTitle}>{route.title}</Text>
              }
              </View>
              {
                this.state.index===i
                ?
                <View style={{ height: 2, width: "100%", backgroundColor: "#4DA72C", marginBottom:0 }}/>
                :
                null
              }              
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

 


  render() {
    sceneMap = getSceneMap( this.state.routes, this.state.scenes );
    return (
      <View>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap(sceneMap)}
            renderTabBar={this._renderTabBar}
            onIndexChange={this._handleIndexChange}
          />        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textTitle: {
    color:"#006837"
  },
  textTitleSel: {
    color:"#4DA72C"
  },
  tabContainer: {
    flex: 1
  },
  tabBar: {    
    // borderWidth: 1,
    // borderColor: "blue",    
    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  tabTouchable: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",  
  }

});