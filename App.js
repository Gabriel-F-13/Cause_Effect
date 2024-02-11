import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { people } from './src/data';
import { styles } from './src/styles';

//Define structure, implement the layout and tasks of the app[X]. 

export default function App() {

  const [display, setDisplay] = useState('none');
  const [check, setCheck] = useState(0);

  const showData = () => {
    if (display === "none"){
      setDisplay("flex");
    } else {
      setDisplay("none")
    }
  }

  return (

    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cause_Effect-List</Text>
      </View>
          
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        
        <View>
          <Text>Clique nos nomes abaixo para ver os dados de cada um</Text>
        </View>
          

        <View>
          <TouchableOpacity
            onPress={() => showData(setCheck(1))}
          >
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>#{people['1'].name}</Text>
          </TouchableOpacity>

          <View style={styles.loginMsg(display)}>
          <View style={{backgroundColor: 'white', borderRadius: 12, width: 250, padding: 12}}>
            <Text style={styles.msg}>{display === 'flex' && check === 1 ? `${'  Street:   ' + people['1'].street}` : ''} </Text>
            <Text style={styles.msg}>{display === 'flex' && check === 1 ? `${'  City:   ' + people['1'].city}` : ''} </Text>
            <Text style={styles.msg}>{display === 'flex' && check === 1 ? `${'  Country:   ' + people['1'].country}` : ''} </Text>
            <Text style={styles.msg}>{display === 'flex' && check === 1 ? `${'  Telephone:   ' + people['1'].telephone}` : ''} </Text>
            <Text style={styles.msg}>{display === 'flex' && check === 1 ? `${'  Birthday:   ' + people['1'].birthday}` : ''} </Text>
          </View>
          </View>
        </View>


        <View>
          <TouchableOpacity
            onPress={() => showData(setCheck(2))}
          >
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>#{people['2'].name}</Text>
          </TouchableOpacity>

          <View style={styles.loginMsg(display)}>
            <View style={{backgroundColor: 'white', borderRadius: 12, width: 250, padding: 12}}>
              <Text style={styles.msg}>{display === 'flex' && check === 2 ? `${'  Street:   ' + people['2'].street}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 2 ? `${'  City:   ' + people['2'].city}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 2 ? `${'  Country:   ' + people['2'].country}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 2 ? `${'  Telephone:   ' + people['2'].telephone}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 2 ? `${'  Birthday:   ' + people['2'].birthday}` : ''} </Text>
            </View>
          </View>
        </View>


        <View>
          <TouchableOpacity
            onPress={() => showData(setCheck(3))}
          >
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>#{people['3'].name}</Text>
          </TouchableOpacity>

          <View style={styles.loginMsg(display)}>
            <View style={{backgroundColor: 'white', borderRadius: 12, width: 250, padding: 12}}>
              <Text style={styles.msg}>{display === 'flex' && check === 3 ? `${'  Street:   ' + people['3'].street}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 3 ? `${'  City:   ' + people['3'].city}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 3 ? `${'  Country:   ' + people['3'].country}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 3 ? `${'  Telephone:   ' + people['3'].telephone}` : ''} </Text>
              <Text style={styles.msg}>{display === 'flex' && check === 3 ? `${'  Birthday:   ' + people['3'].birthday}` : ''} </Text>
            </View>
          </View>
        </View>
      </View>            
    </View>
  );
}