import React, { Component } from "react";
import { Text, View, StyleSheet, SectionList, Image} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
// import { Icon, Accordion} from "native-base";




export default class IndicadoresSectionList extends Component {

  constructor(props){
    super(props);        
}
  
  _renderHeader(section) {
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {section.section.title}          
              </Text>
              <Text style={styles.desc}>
                 {" "}{section.section.desc}          
              </Text>              
          </View>          
      </View>
    );
  }
  _renderContent({item,index}) {    
    return (
      <View>                  
            <View style={styles.contentContainer}>
                <View style={styles.left}>
                    <Text>{item.itemDesc}</Text>                
                </View>          
                <View style={styles.right}>
                    <Text>{item.value}</Text>                
                </View>     
            </View>                                                   
      </View>
    );
  }
  render() {
    return (
          // <Accordion
          //   dataArray={this.props.dataArray}
          //   animation={true}
          //   expanded={true}
          //   renderHeader={this._renderHeader}
          //   renderContent={this._renderContent}
          // />   
          
          <SectionList
          sections={this.props.dataArray}
          renderSectionHeader={this._renderHeader}
          renderItem={this._renderContent}
          keyExtractor={ (item, index) => index.toString() }
        />
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
      fontWeight:"bold"            
  },
  desc: {
    paddingLeft: 5
  },
  container: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    backgroundColor: "#DCDDDD"
  }, 
  contentContainer: {
    flexDirection: "row",  
    justifyContent: "space-between"    
  },  
  plus:{
    flexDirection: "column",
    justifyContent: "center",
    paddingRight:5    
  }, 
  left:{
    paddingLeft: 5
  },
  right:{
    paddingRight: 5
  }
});