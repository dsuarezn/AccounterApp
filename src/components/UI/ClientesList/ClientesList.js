import React, { useRef, Component } from "react";
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight ,FlatList, Platform} from 'react-native';
import { Badge} from 'react-native-elements';
import ClienteSearchBar from "../ClienteSearchBar/ClienteSearchBar";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuFun = (function() {
    const menu = useRef();    
    const hideMenu = () => menu.current.hide();    
    const showMenu = () => menu.current.show();

        return (
            <View style={styles.container}>
                <Menu ref={menu} button={<Text onPress={showMenu}>Menu</Text>}>
                <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={hideMenu} disabled>
                    Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
                </Menu>
            </View>
        )
    });

class ClientesList extends Component{

    
    state={
        filterword:null,
        listaDatos:[]        
    };

    

    filtroDatos(dataArray,filterword){
        this.props.onFilterDataHandler();
        if(dataArray.length>0 && filterword!==null && filterword.length>0){
          var newArray = dataArray.filter(function (element) {
            return element.razonSocial.includes(filterword);
          });        
          return newArray;
        }
        return dataArray;
      }

      componentWillMount(){   
        var lista=this.props.dataArray;
        this.setState({listaDatos:lista});

      }
    

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

    seleccionarElemento = (elementInfo) => {        
        this.props.onPressHandler(elementInfo);
    }

    eliminarElemento = (uuid) => {                       
        this.props.onDeleteClientHandler(uuid);
    }

    modificarElemento = (elementInfo) => {                    
        this.props.onEditClientHandler(elementInfo);
    }

    setFilterWord = (value) => {  
        console.log("llego al controlador de la lista:"+value);                          
        var lista=this.filtroDatos(this.props.dataArray,value);
        this.setState({listaDatos:lista});
    }
    
    render () {

      return (
  
        <View style={styles.flatListContainer}>
            <ClienteSearchBar onAddClientHandler={this.props.onAddClientHandler}  onFilterDataHandler={this.props.onFilterDataHandler} onChangeFilterText={this.setFilterWord}/>            
            <FlatList
                keyExtractor={(item, index) => index.toString()}   
                ItemSeparatorComponent={this.renderSeparator}
                data={this.state.listaDatos} renderItem={
                ({item}) =>                
                    <View style={styles.itemListContainer}>
                        <TouchableOpacity onPress={() => this.seleccionarElemento(item)} style={styles.parentItemListContainer}>
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
                        
                            <View>
                            <Icon onPress={() => this.modificarElemento(item)} name="more-vert" size={20} color="#6F7F89" />
                                {/* <Menu ref={this.setMenuRef} button={<Text onPress={this.showMenu}>Menu</Text>} >
                                    <MenuItem key="modificar" onPress={() => this.modificarElemento(item)}>Modificar</MenuItem>
                                    <MenuItem key="eliminar" onPress={() => this.eliminarElemento(item.uuid)}>Eliminar</MenuItem>                                    
                                </Menu>                                 */}
                                {/* <MenuFun /> */}
                            </View>
                        
                    </View>                 
                }/>
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

export default ClientesList;
