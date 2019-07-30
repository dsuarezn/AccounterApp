import React, { Component } from 'react';
import { iconsMap } from '../../components/UI/Icons/AppIcons';
import { Navigation } from 'react-native-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/AntDesign';

import {bindComponentNavigation} from '../../navigation/Navigation';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import VencimientoSelectableButton from '../../components/UI/VencimientoSelectableButton/VencimientoSelectableButton';

import CommonScreenComponent from "../../components/UI/CommonScreen/CommonScreen";

LocaleConfig.defaultLocale = 'es';

LocaleConfig.locales['es'] = {
  monthNames: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'],
  monthNamesShort: ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'],
  dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
  dayNamesShort: ['D','L','M','M','J','V','S'],
  today: 'Hoy'
};

const calendarDatesConfig={
  currentDate:"2019-06-15"
}

const listaBotones=['IG','RF','IC','PE','AJ','SP','ESAL','PN'];

class CalendarScreen extends CommonScreenComponent{
   
    constructor(props){
        super(props);   
        
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);                     
        bindComponentNavigation(this);
    }
    

    guardarInformacionHandler = () => {
        
    }

    
    loginHandler = () => {
        
    }

    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
      calendarDatesConfig.markedDates[this.state.selected]={selected: true, disableTouchEvent: true, selectedDotColor: 'orange'};
      console.log(calendarDatesConfig.markedDates);
    }

   


    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    render(){

      buttonsListArr = listaBotones.map((buttonInfo,i) => <VencimientoSelectableButton  textMode={"onlyCode"} selectable={false} width={24} height={24} key={i} code={buttonInfo}/>);

      markedDates={
        [this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}, 
        '2019-06-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}]},
        '2019-06-09': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'red'}, {key: 'massage', color: 'red', selectedDotColor: 'blue'}]}
      }

        return(
            <View style={styles.container}>
                <View style={styles.calendarContainer}>
                    <Calendar
                      firstDay={1}
                      renderArrow={
                        (direction) => (                          
                            direction==='left'
                            ?
                            <Icon name="keyboard-arrow-left" size={32} color="#4DA72C"></Icon>
                            :
                            <Icon name="keyboard-arrow-right" size={32} color="#4DA72C"></Icon>
                        )
                      }
                      onDayPress={this.onDayPress}
                      style={styles.calendar}
                      current={calendarDatesConfig.currentDate}
                      markingType={'multi-dot'}
                      // markedDates={calendarDatesConfig.markedDates}    
                      markedDates={                                                                     
                        markedDates                      
                      }                  
                      hideArrows={false}
                      hideExtraDays
                      theme={{
                        calendarBackground: 'white',
                        textSectionTitleColor: '#6F7D88',
                        dayTextColor: '#6F7D88',
                        todayTextColor: '#006934',
                        selectedDayTextColor: 'green',
                        monthTextColor: '#6F7D88',
                        indicatorColor: 'green',                        
                        arrowColor: 'green',
                        // textDisabledColor: 'red',
                        'stylesheet.calendar.header': { 
                          monthText: {
                            fontSize: 22,
                            color:"#6F808A"
                          },                         
                          week: {
                            marginTop: 5,
                            paddingTop:5,
                            // marginBottom: 5,
                            paddingBottom:8,
                            flexDirection: 'row',
                            justifyContent: 'space-around',                            
                            borderBottomWidth: 1,
                            borderBottomColor:"#F2F2F2", 
                            // borderWidth:1,
                            // borderColor:"orange"                        
                          },
                          header: {
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            // paddingLeft: 5,
                            // paddingRight: 5,
                            marginTop: 6,
                            height:"31%",
                            alignItems: 'center', 
                            backgroundColor:"#F2F2F2",
                            // borderWidth:1,
                            // borderColor:"blue" 
                          },
                          dayHeader: {                                                    
                            fontSize: 22,
                            justifyContent: 'space-around',
                            fontFamily: "Roboto",
                            fontWeight: "bold",
                            color: "#6F808A"
                          
                          }
                        },
                        'stylesheet.calendar.main': {                          
                            monthView:{
                              marginTop:-18,
                              // borderWidth:1,
                              // borderColor:"red" 
                            }
                        }
                      }}
                    />                
                </View>        
                <View style={styles.logoContainer}>
                      <View style={styles.rowDescContainer}>
                        <View style={styles.dateTextGeneralContainer}>
                          <View style={styles.rowDateTextStyle}>
                            <Text style={styles.dateStyle}>Enero</Text>
                          </View>
                          <View style={styles.rowDateTextStyle}>
                            <Text style={styles.dateDayStyle}>2</Text>
                            <Text style={styles.dateStyle}>{' '}/2019</Text>
                          </View>
                        </View>
                        <View style={styles.vencButtonContainer}>                          
                            {buttonsListArr} 
                        </View>
                        <View style={styles.dateTextGeneralContainer}>
                            <View style={styles.rowDateTextStyle}>
                              <Text style={styles.infoStyle}>Último número</Text>  
                            </View>
                            <View style={styles.rowDateTextStyle}>
                              <Text style={styles.infoStyle}>NIT: </Text>
                              <Text style={styles.infoNitStyle}>1</Text>  
                            </View>                                    
                        </View>
                        <View style={styles.iconArrowContainer}>
                          <OctIcon style={{marginBottom:5}} name="caretdown" size={17} color="#4DA72C"></OctIcon>
                        </View>
                    </View>
                    <View style={{ height: 1, width: "90%", backgroundColor: "#CED0CE" }} />
                    <View style={styles.rowDescContainer}>
                        <Text>* Primera couta, el valor no podrá ser inferior al 20% del 
                          saldo a pagar del año gravable 2017, si la declaración arroja 
                          saldo a favor no se debe liquidar la primera cuota</Text>
                    </View>
                </View>
            </View>
        );
    }
} 



const styles=StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      // borderBottomWidth: 1,
      // borderColor: '#eee',
      height: 250,
      width:"100%"
      // borderWidth:1,
      // borderColor:"orange",
    },
    container: {
        width:"100%",
        height:"100%"             
    },
    calendarContainer:{     
        backgroundColor:"#FFFFFF", 
        // borderWidth:1,
        // borderColor:"orange", 
        width:"100%",
        height:"72%",
        alignItems:"center"
        
        // ,borderWidth:1,
        // borderColor:"green" 
    },
    logoContainer:{    
        flexDirection: "column", 
        alignItems:"center", 
        justifyContent:"flex-start",         
        backgroundColor:"#F2F2F2", 
        width:"100%",        
        height:"32%",
        // borderWidth:1,
        // borderColor:"red", 
    },
    rowDescContainer:{    
      flexDirection: "row", 
      alignItems:"flex-end", 
      justifyContent:"center",       
      backgroundColor:"#F2F2F2", 
      width:"100%",
      // borderWidth:1,
      // borderColor:"blue",
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:15,
      paddingRight:15 
    },
    dateTextGeneralContainer:{    
      flexDirection: "column", 
      alignItems:"flex-start",
      paddingRight:10,
      paddingLeft:5,
      // borderWidth:1,
      // borderColor:"red" 
    },
    iconArrowContainer:{    
      flexDirection: "column", 
      alignItems:"flex-start",
      // borderWidth:1,
      // borderColor:"yellow" 
    },
    rowDateTextStyle:{    
      flexDirection: "row", 
      alignItems:"baseline", 
      justifyContent:"center"       
    },
    vencButtonContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start', 
      width:"100%",        
      justifyContent:"flex-start",
      // borderWidth:1,
      // borderColor:"black"       
    },
    dateStyle:{
      color:"#44AD3F",
      fontSize:20   
    },
    dateDayStyle:{
      color:"#006934",
      fontSize:22,
      fontWeight: "bold"   
    },
    infoStyle:{ 
      color:"#6F7D88",     
      fontSize:20   
    },
    infoNitStyle:{    
      color:"#6F7D88",  
      fontSize:22,
      fontWeight: "bold"   
    },
});


const mapStateToProps =(state, ownProps)=>{
    return {
        
    }
}

const mapDispatchToPropsFunction =()=>{
    
}

export default connect()(CalendarScreen);