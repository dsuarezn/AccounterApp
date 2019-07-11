import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SectionList,Dimensions, Image, StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { TabView, SceneMap } from 'react-native-tab-view';
// import { Icon, Accordion} from "native-base";
import Animated from 'react-native-reanimated';



export default class IndicadoresSectionList extends Component {


  constructor(props){
    super(props);        
  
  }  

  
  _renderHeader(section) {
    var componente;
    if(section.section.value!==''){
      componente=<Text style={styles.itemTextStyleValue}>{section.section.value}</Text>;
    }
    var subtitulo;
    if(section.section.desc!==''){
      subtitulo=<View >
                  <Text style={styles.descStyle}>
                    {section.section.desc}          
                  </Text>
                </View>;
    }
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <View style={styles.headerContent}>
                <View>
                    <Text style={styles.title}>
                      {section.section.title}      
                    </Text>
                </View>
                <View>
                    {componente}
                </View>                          
              </View>
              {subtitulo}             
          </View>                  
      </View>
    );
  }
  _renderContent({item,index}) {   
    var componenteItems;
    if(item!==''){
      componenteItems=<View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.itemTextStyle}>{item.itemDesc}</Text>                
                        </View>          
                        <View>
                            <Text style={styles.itemTextStyleValue}>{item.value}</Text>                
                        </View>     
                    </View>;
    }   
    return (
        <View>{componenteItems}</View>                   
                                                                
    );
  }
  renderSeparator = () => {
    return (
      //Item Separator
      <View style={styles.separatorView}>
        <View style={styles.viewStyleForLine}/>
      </View>
    );
  };

  
  
  render() {
    return (
      <View style={styles.principalContainer}>
          <View style={styles.generalContainer}>     
              <SectionList
              sections={this.props.dataArray}
              renderSectionHeader={this._renderHeader}
              renderItem={this._renderContent}
              renderSectionFooter={this.renderSeparator}
              keyExtractor={ (item, index) => index.toString() }
            />      
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  descStyle: {
    fontFamily:"Roboto", 
    color:"#6F7FA5"           
  },
  titleContainer: {
      width:"100%",
      flexDirection: "column",
      padding: 5                
  },
  title: {            
      fontSize:19,
      fontFamily:"Roboto" , 
      color: "#000000",            
  },
  container: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    backgroundColor: "#FFFFFF", 
    width:"100%"
  }, 
  headerContent: {
    flexDirection: "row",           
    width:"100%",
    justifyContent: "space-between", 
  },
  contentContainer: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    backgroundColor : "#FFFFFF", 
    paddingRight:5, 
    paddingLeft:5
  }, 
  principalContainer: {
    width:"100%",     
    flex:1,    
    flexDirection:"column",    
    alignItems:"center",
    backgroundColor: "#FFFFFF"  
  }, 
  generalContainer: {                
    width:"90%",        
    paddingTop:10
  }, 
  itemTextStyleValue:{
    fontFamily:"Roboto-Bold", 
    color:"#006837", 
    fontSize:19
  },
  itemTextStyle:{
    fontFamily:"Roboto-Bold", 
    color:"#6F7F89", 
    fontSize:19
  },
  viewStyleForLine: {           
    height: 1,
    width: '100%', 
    backgroundColor: '#C8C8C8', 
  },
  separatorView: {  
    flex:1, 
    flexDirection:'column',
    justifyContent: "center",
    alignItems:"center",    
    backgroundColor: '#FFFFFF',
    paddingTop:7, 
    paddingBottom:7
  }

});