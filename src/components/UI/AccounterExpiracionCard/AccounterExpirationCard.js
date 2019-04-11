import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import {AppImages} from '../../UI/Images/AppImages';


class AccounterExpirationCard extends Component{

    constructor(props){
        super(props);        
    }
    
    render(){
        let controlStyle=styles.greenbackground;

        if(this.props.levelStyle==='red'){ 
            controlStyle=styles.redbackground;
        }
        else if(this.props.levelStyle==='orange'){ 
            controlStyle=styles.orangebackground;
        }
        else if(this.props.levelStyle==='green'){ 
            controlStyle=styles.greenbackground;
        }

        

        return(
            <View style={[styles.container,controlStyle]}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Vence en </Text>
                            <Text style={styles.titleNumber}>{this.props.venceEn}</Text>
                            <Text style={styles.title}> días</Text>
                        </View>
                        <View style={styles.summaryContainer}>
                            <Text style={styles.summaryText}>
                                el martes 9 de octubre
                            </Text>
                        
                        </View>
                    </View>
                    <View style={styles.headerRightContainer}>
                            <Text style={styles.summaryText}>
                                Tienes {this.props.noVencimientos}                      
                            </Text>                        
                            <Text style={styles.summaryText}>
                                vencimiento
                            </Text>
                    </View>                               
                </View>
            <View style={styles.listContainer}>
                    
            <FlatList data={this.props.dataArray} renderItem={
                ({item}) =>
                <View style={styles.itemListContainer}>
                    <Image style={styles.image} source={AppImages.userImage} resizeMode="contain"/>
                    <View style={styles.textContainer}>
                        <Text style={styles.listItemTextExpiration}>
                            {item.vencimiento}                   
                        </Text>    
                        <Text style={styles.listItemTextOwner}>
                            {item.owner}
                        </Text>                      
                    </View>
                </View>                
                }/>

                   

                 

            </View>
            </View>
        );        
    }

};


const styles=StyleSheet.create({
    
    redbackground:{
        backgroundColor:"red"
    }, 
    orangebackground:{
        backgroundColor:"orange"
    },
    greenbackground:{
        backgroundColor:"green"
    },    
    summaryText:{   
        color: "white",      
        fontSize:15,
        justifyContent: "center"
    }, 
    title:{   
        color: "white",      
        fontSize:25
    },
    titleNumber:{      
        color: "white",   
        fontSize:32,
        fontWeight: "bold", 
        alignItems:"baseline"     
    },
    headerLeftContainer:{         
        flexDirection:'column',        
        alignItems:"flex-start", 
        width:"65%",
        marginLeft:5           
    },
    headerRightContainer:{         
        flexDirection:'column',
        justifyContent: "flex-start",
        alignItems:"flex-end", 
        width:"30%",
        marginRight:5    
    },
    headerContainer:{         
        flexDirection: "row",  
        justifyContent: "space-between"     
    },
    container:{          
        borderRadius: 15, 
        padding:10,
        margin: 15      
    },
    summaryContainer:{         
        alignItems:"center"       
    },
    titleContainer:{         
        flexDirection:'row', 
        justifyContent: "center", 
        alignItems:"baseline"  
    },
    itemContainer:{         
        flexDirection:'column'     
    },
    listContainer:{         
        flexDirection:'column',
        marginTop:20      
    },
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
    textContainer:{   
        flexDirection:'column',
        width:"90%", 
        flexWrap: 'wrap'
    }, 
    listItemTextExpiration:{   
        color: "white",      
        fontSize:20, 
        marginLeft: 10, 
        flexWrap: 'wrap', 
        marginRight:7       
    }, 
    listItemTextOwner:{   
        color: "white",      
        fontSize:15, 
        marginLeft: 10        
    }
});

export default AccounterExpirationCard;