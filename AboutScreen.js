import React from 'react';
import {View, Text, Button} from 'react-native';

function AboutScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>About!</Text>
      <Button title="Go-App" onPress={() => navigation.navigate('App')} />
    </View>
  );
}

export default AboutScreen;
