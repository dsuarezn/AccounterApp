import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight ,FlatList, Platform} from 'react-native';
import { Badge} from 'react-native-elements';
// import {iconsMap} from '../Icons/AppIcons';
// import {AppImages} from '../../UI/Images/AppImages';
import ClienteSearchBar from "../ClienteSearchBar/ClienteSearchBar";

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
    renderers    
  } from 'react-native-popup-menu';

const { ContextMenu, SlideInMenu, Popover } = renderers;

import Icon from 'react-native-vector-icons/MaterialIcons';




class ContribuyentesList extends Component{


    _menu = null;

    setMenuRef = ref => {
      this._menu = ref;
    };
  
    hideMenu = () => {
      this._menu.hide();
    };
  
    showMenu = () => {
      this._menu.show();
    };


    onOptionSelect(value) {
             
    }

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
        <View style={styles.flatListContainer}>
            <ClienteSearchBar onAddClientHandler={this.props.onAddClientHandler}  onFilterDataHandler={this.props.onFilterDataHandler}/>

            <MenuProvider style={styles.popUpContainer}>

            <FlatList
                ItemSeparatorComponent={this.renderSeparator}
                data={this.props.dataArray} renderItem={
                ({item}) =>                
                    <View style={styles.itemListContainer}>
                        <TouchableOpacity onPress={this.props.onPressHandler} style={styles.parentItemListContainer}>
                            <View style={styles.iconContainer}>                            
                                {item.tipoCliente==='Natural' ? <Icon name="account-circle" size={25} color="#6F7F89" /> :<Icon name="work" size={25} color="#6F7F89" /> }  
                                {item.cantVencimientos>0 ? <Badge status="error" value="5" containerStyle={{ position: 'absolute', top: -4, right: -4 }} /> :null }                            
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.listItemTextOwner}>
                                    {item.razonSocial}                
                                </Text>                                              
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer} onPress={this.props.onOptionsPressHandler}>
                            <View>
                                {/* <Icon name="more-vert" size={20} color="#6F7F89" /> */}
                                <Menu onSelect={value => this.onOptionSelect(value)}>
                                    <MenuTrigger children={<Icon name="more-vert" size={20} color="#6F7F89" />}  />
                                    <MenuOptions>
                                        <MenuOption value="modificar" text="Modificar" />
                                        <MenuOption value="Eliminar" text="Eliminar" />
                                    </MenuOptions>
                                </Menu>


                            </View>
                        </TouchableOpacity>
                    </View>                 
                }/>
                </MenuProvider>

                {/* <View style={{height: 1, width: "100%", backgroundColor: "#CED0CE"}} /> */}
        </View>

      )
    }


}


const styles=StyleSheet.create({

    popUpContainer: {
        flex: 1,
        paddingTop: 20,
      },

    flatListContainer:{          
        alignItems: "center",              
        justifyContent: "center", 
        width:"100%"       
    },
    parentItemListContainer:{  
        flexDirection:'row',  
        alignItems: "center",              
        justifyContent: "center",
        padding: 10,
        width:"100%"

    },
    itemListContainer:{  
        flexDirection:'row',  
        alignItems: "center",              
        justifyContent: "center",        
        width:"95%"

    },
    image: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').height * 0.10,
        marginLeft: 10
    },
    listItemTextOwner:{   
        color: "gray",      
        fontSize:15, 
        marginLeft: 10        
    },
    textContainer:{   
        width:"86%",
        // borderWidth: 1,
        // borderColor:"red"
    },
    iconContainer:{   
        width:"7%",
        // borderWidth: 1,
        // borderColor:"red"
    }
    
});

export default ContribuyentesList;
