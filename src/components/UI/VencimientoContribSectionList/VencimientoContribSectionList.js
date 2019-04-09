import React, { Component } from "react";
import { Text, View, StyleSheet, SectionList, Image} from "react-native";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';

export default class VencimientoContribSectionList extends Component {

  constructor(props){
    super(props);        
}
  
_renderHeader(section) {
  return (      
      <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {section.section.title}          
          </Text>            
      </View>                
  );
}
_renderContent({item,index}) {    
  return (
              
      <View style={styles.contentContainer}>   
        <View style={styles.left}>        
          <Badge badgeStyle={styles.badgeStyle} textStyle={styles.badgeTextStyle} value={item.value} status="warning" />
        </View>
        <View style={styles.right}>
          <Text style={styles.itemTextStyle}>{item.itemDesc}</Text>  
        </View>                                                  
      </View>    
  );
}
  render() {
    return (        
          <SectionList
          sections={this.props.dataArray}
          renderSectionHeader={this._renderHeader}
          renderItem={this._renderContent}
          keyExtractor={ (item, index) => index }/>
    );
  }
}


const styles = StyleSheet.create({
  titleContainer: {
      flexDirection: "column",
      padding: 5,
      justifyContent: "flex-start"           
  },
  title: {      
    paddingLeft: 5,
    fontSize:23,
    fontWeight:"bold", 
    backgroundColor:"#b1deba"          
  }, 
  contentContainer: {
    flexDirection: "row",  
    justifyContent: "flex-start",
    padding:5,
    marginLeft:10,    
    width:"80%"      
  },
  left:{
    paddingLeft: 5
  },
  right:{
    paddingRight: 5,
    marginLeft: 30    
  }, 
  itemTextStyle:{
    fontSize:21     
  }, 
  badgeStyle:{
    width:35, 
    height:35, 
    borderRadius: 25     
  },
  badgeTextStyle:{
    fontSize:21     
  }
});