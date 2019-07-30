import React, { Component } from "react";
import { Text, View, StyleSheet, SectionList, Image, TouchableOpacity} from "react-native";







const buttonsConstants = [
    {
      code:"IG",
      color:"#47A347", 
      title:"Impuesto a la Gasolina",
      abbrTitle:"Impuesto a la Gasolina", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"RF",
      color:"#231F20", 
      title:"Retención y autoretención Renta",
      abbrTitle:"Retención y autoretención", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"IC",
      color:"#CB2326", 
      title:"Impuesto al Carbono",
      abbrTitle:"Impuesto al Carbono", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"BM",
      color:"#F78E2C", 
      title:"IVA Bimestral*",
      abbrTitle:"IVA Bimestral", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"CT",
      color:"#F78E2C", 
      title:"IVA Cuatrimestral",
      abbrTitle:"IVA Cuatrimestral", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"CO",
      color:"#703B96", 
      title:"Impuesto al Consumo",
      abbrTitle:"Impuesto al Consumo", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"EG",
      color:"#CB7CB3", 
      title:"Exógena Grandes Contribuyentes",
      abbrTitle:"Grandes Contribuyentes", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"EJ",
      color:"#CB7CB3", 
      title:"Exógena Naturales y Jurídicas",
      abbrTitle:"Grandes Contribuyentes", 
      textColor:"#FFFFFF"
    }, 
    {
      code:"PE",
      color:"#CADB2B", 
      title:"Practicas Empresariales",
      abbrTitle:"Practicas Empresariales",
      textColor:"#3E3E3F"
    }, 
    {
      code:"AG",
      color:"#CADB2B", 
      title:"Activos del Exterior Grandes Contribuyentes",
      abbrTitle:"Activos Exterior Grandes",
      textColor:"#3E3E3F"
    }, 
    {
      code:"AJ",
      color:"#CADB2B", 
      title:"Activos del Exterior Personas Jurídicas",
      abbrTitle:"Activos Exterior Jurídicas",
      textColor:"#231F20"
    }, 
    {
      code:"SP",
      color:"#00A9BE", 
      title:"Supersociedades",
      abbrTitle:"Supersociedades",
      textColor:"#FED226"
    }, 
    {
      code:"ESAL",
      color:"#2D2D2D", 
      title:"Memoria Económica",
      abbrTitle:"Memoria Económica",
      textColor:"#FFFFFF"
    }, 
    {
      code:"PN",
      color:"#0066B3", 
      title:"Renta Naturales",
      abbrTitle:"Renta Naturales",
      textColor:"#FFFFFF"
    }, 
    {
      code:"PJ",
      color:"#0066B3", 
      title:"Renta Jurídicas*",
      abbrTitle:"Renta Naturales",
      textColor:"#FFFFFF"
    }, 
    {
      code:"GC",
      color:"#0066B3", 
      title:"Renta Grandes**",
      abbrTitle:"Renta Grandes",
      textColor:"#FFFFFF"
    }, 
    {
      code:"AX",
      color:"#0066B3", 
      title:"Activos exterior Naturales",
      abbrTitle:"Activos Exterior Naturales",
      textColor:"#FFFFFF"
    }, 
    {
      code:"PT",
      color:"#65BA46", 
      title:"Precios de transferencia y documentación comprobatoria",
      abbrTitle:"Precios transf y doc",
      textColor:"#231F20"
    }
    
]


export default class VencimientoSelectableButton extends Component {

  constructor(props){
    super(props);  
    
    if(this.props.selectable===true){
      this.state.selected=false;
    }
  }

  state = {
    selected : true
  };

  componentDidMount(){
    this.setState({selected: this.props.selected});
  }

  
  changeStateValue = () => {      
    if(this.props.selectable===true){        
      this.setState({selected: !this.state.selected},function() {        
        this.props.onPressButtonHandler(this.props.code); 
      });      
    }
  }

  render() {

    let widthDefault=90;
    let heightDefault=90;

    let codeDefault='IG';
    let textModeDefault='full';

    let fontRelation=0.7;
    let fontRelationDesc=0.125;    
    let marginRelation=-0.1;

    let paddingValue=5;


    let borderRadiusRelation=0.1;

    let buttonMarginRelation=0.05;


    if(this.props.code!==undefined){
        codeDefault=this.props.code;
    }

    if(this.props.width!==undefined){
      widthDefault=this.props.width;
    }
   
    if(this.props.height!==undefined){
      heightDefault=this.props.height;
    }

    if(codeDefault.toLowerCase()==='esal'){
      fontRelation=0.55;
      marginRelation=0;
    } 

    if(this.props.textMode!==undefined){
        textModeDefault=this.props.textMode;           
        if(this.props.textMode==='onlyCode'){
          textModeDefault='onlyCode';
          paddingValue=0;
          if(codeDefault.toLowerCase()==='esal'){
            fontRelation=0.54;
            marginRelation=0;
          }else{
            fontRelation=0.85;              
            marginRelation=0;
          }

        }else{
          textModeDefault='full';
        }
    }
    

    
    

    let itemOpacity = this.state.selected==true ? 1.0 : 0.4;

    item = buttonsConstants.filter(element => element.code===codeDefault);

    let selectable = this.props.selectable;    

    return (             
        selectable===true 
        ? 
        textModeDefault==='onlyCode' ?       
          <TouchableOpacity onPress={this.changeStateValue}>
            <View opacity={itemOpacity} style={[styles.buttonStyle,{backgroundColor:item[0].color, width:widthDefault, height:heightDefault, padding:paddingValue, borderRadius:widthDefault*borderRadiusRelation, margin:buttonMarginRelation*widthDefault}]}>
              <Text style={[styles.mayorTextStyle,{color:item[0].textColor, fontSize:fontRelation*widthDefault, marginTop:marginRelation*widthDefault}]}>{item[0].code}</Text>
            </View>        
          </TouchableOpacity>
          : 
          <TouchableOpacity onPress={this.changeStateValue}>
            <View opacity={itemOpacity} style={[styles.buttonStyle,{backgroundColor:item[0].color, width:widthDefault, height:heightDefault, padding:paddingValue, borderRadius:widthDefault*borderRadiusRelation, margin:buttonMarginRelation*widthDefault}]}>
                <View style={styles.codeContainer}>
                  <Text style={[styles.mayorTextStyle,{color:item[0].textColor, fontSize:fontRelation*widthDefault, marginTop:marginRelation*widthDefault}]}>{item[0].code}</Text>
                </View>
                <View style={styles.subtContainer}>
                  <Text style={[styles.minorTextStyle,{color:item[0].textColor, fontSize:fontRelationDesc*widthDefault}]}>{item[0].abbrTitle}</Text>
                </View>
            </View>                   
          </TouchableOpacity>        
        :
        textModeDefault==='onlyCode' ?       
          <View>
            <View  style={[styles.buttonStyle,{backgroundColor:item[0].color, width:widthDefault, height:heightDefault, padding:paddingValue, borderRadius:widthDefault*borderRadiusRelation, margin:buttonMarginRelation*widthDefault}]}>
              <Text style={[styles.mayorTextStyle,{color:item[0].textColor, fontSize:fontRelation*widthDefault, marginTop:marginRelation*widthDefault}]}>{item[0].code}</Text>
            </View>        
          </View>
          : 
          <View>
            <View  style={[styles.buttonStyle,{backgroundColor:item[0].color, width:widthDefault, height:heightDefault, padding:paddingValue, borderRadius:widthDefault*borderRadiusRelation, margin:buttonMarginRelation*widthDefault}]}>
                <View style={styles.codeContainer}>
                  <Text style={[styles.mayorTextStyle,{color:item[0].textColor, fontSize:fontRelation*widthDefault, marginTop:marginRelation*widthDefault}]}>{item[0].code}</Text>
                </View>
                <View style={styles.subtContainer}>
                  <Text style={[styles.minorTextStyle,{color:item[0].textColor, fontSize:fontRelationDesc*widthDefault}]}>{item[0].abbrTitle}</Text>
                </View>
            </View>                   
          </View>
        
             
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
  buttonStyle:{     
    padding: 0,     
    flexDirection:"column", 
    alignItems:"center", 
    justifyContent:"center",
    // borderWidth: 1,
    // borderColor: "black"
  },
  mayorTextStyle:{ 
    fontFamily: "BebasNeue Bold", 
    // fontSize:50,
    // fontSize:0.05*width,
    // borderWidth: 1,
    // borderColor: "white", 
    padding:0,
    margin:0
    
  },
  minorTextStyle:{ 
    fontFamily: "BebasNeue Bold", 
    fontSize:10    
  }, 
  codeContainer:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
    width:"100%", 
    height:"70%",
    padding: 0,
    margin:0,
    // borderWidth: 1,
    // borderColor: "red"
  }, 
  subtContainer:{
    width:"100%", 
    height:"30%",
    // borderWidth: 1,
    // borderColor: "blue", 
    justifyContent:"flex-end"

  }
});