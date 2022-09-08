import React, { Component } from 'react';
import { View,
        Text,
        StyleSheet,
        TextInput, 
        TouchableOpacity} from 'react-native';
import ItemList from './ItemList';
export default class App extends Component{
    constructor(){
      super();
      this.state={text:'',
                  data:[]}
    }
    handleSave = () =>{
        const { text,data } =this.state;
        data.push({text});
        this.setState({data ,text:''});
    };
    render(){
      const { text , data} = this.state;
      return(
        <View style = {[{flex:1 , paddingTop:10}]}>
          <View style={style.title}>
            <Text style={style.title_Text}>To-Do Application</Text>
            <View style={{backgroundColor:'#ccc' , padding:5 , flexDirection:'row'}}>
              <TextInput style={style.input}
                         value={text}
                         onChangeText={(text)=>this.setState({text})}></TextInput>
              <TouchableOpacity onPress={this.handleSave} style={style.button}>
                <Text style={style.title_Text}>Ekle</Text>
              </TouchableOpacity>
              <View>
                {data.map((item)=>{
                    return <ItemList text={item.text}/>
                })}
              </View>
            </View>
          </View>
        </View>
      )
    }
}
const style = StyleSheet.create({
      title:{backgroundColor : 'blue' , padding:10},
      title_Text: {color : 'white' , textAlign : 'center' , fontSize:20},
      input:{padding:10,backgroundColor:'white',flex:1},
      button:{padding:10, backgroundColor:'blue' , borderRadius:10 , marginLeft:10}
});

