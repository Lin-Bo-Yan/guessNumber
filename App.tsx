/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

let number = Math.round(Math.random() * 100);
let count = 0;
function App(): JSX.Element {
  const [text,setText] = React.useState('');

  React.useEffect( () => {
    initNumber();
  },[])

  function doGuess(){
    count ++;
    const numberValue = parseInt(text);
    if(numberValue === number){
      Alert.alert(`猜中了!你一共猜了${count}次`)
      initNumber()
    } else if(numberValue < number){
      Alert.alert('太小了!')
    } else if(numberValue > number){
      Alert.alert('太大了!')
    }
  }
  
  function initNumber(){
    number = Math.round(Math.random() * 100);
    console.warn('初始化',number)
    count = 0
  }

  return (
    <SafeAreaView >
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title='猜' onPress={doGuess} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  },

});

export default App;
