import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, Platform} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import {iconsMap} from '../Icons/AppIcons';
import {AppImages} from '../../UI/Images/AppImages';



class ContribuyentesList extends Component{

    constructor(props){
        super(props);        
    }    
    
    // renderItem = ({ item }) => (
    //     <TouchableOpacity>
    //     <ListItem            
    //         leftAvatar={{ source: { uri: item.avatar_url } }}
    //         title={item.name}
    //         subtitle={item.subtitle}
    //         bottomDivider={true}
    //         rightIcon={iconsMap["pen"]}
    //         onPress={this.props.onPressHandler}
    //     />
    //     </TouchableOpacity>
    // )

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE"
            }}
          />
        );
      };

    // renderSeparator = () => {
    //     return (
    //         <Divider style={{ backgroundColor: 'blue' }} />
    //     );
    // };
    
    render () {
      return (
        // <FlatList
        //   keyExtractor={ (item, index) => index.toString() }
        //   data={this.props.dataArray}
        //   renderItem={this.renderItem}
        // />
        
        <FlatList 
            ItemSeparatorComponent={this.renderSeparator}
            data={this.props.dataArray} renderItem={
            ({item}) =>
            <TouchableOpacity onPress={this.props.onPressHandler}>
                <View style={styles.itemListContainer}>
                    <Image style={styles.image} source={AppImages.userImage} resizeMode="contain"/>
                    <View style={styles.textContainer}>
                        <Text style={styles.listItemTextExpiration}>
                            {item.name}                
                        </Text>    
                        <Text style={styles.listItemTextOwner}>
                            {item.subtitle}
                        </Text>                      
                    </View>
                </View> 
            </TouchableOpacity>               
            }/>
        

      )
    }


}


const styles=StyleSheet.create({
    itemListContainer:{  
        flexDirection:'row',  
        alignItems: "center",              
        justifyContent: "flex-start"      
    },
    image: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').height * 0.10,
        marginLeft: 10
    },
    listItemTextExpiration:{   
        color: "gray",      
        fontSize:20, 
        marginLeft: 10        
    },
    listItemTextOwner:{   
        color: "gray",      
        fontSize:15, 
        marginLeft: 10        
    },
    textContainer:{   
        flexDirection:'column'
    }
    
});

export default ContribuyentesList;
