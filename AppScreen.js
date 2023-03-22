import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text style={styles.header}>Trending Recipes</Text>
          <View style={styles.recipemain}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{width: 473, height: 250, borderRadius: 10, padding: 0}}
            />
            <Text style={styles.Title}>Chiken Tikka</Text>
            <Text style={styles.Sub}>Indian British chiken recipe</Text>
            <Text style={styles.Desc}>Ingriediends</Text>
            <Text style={styles.Prep}>Prep Time: 45mins</Text>
          </View>
          <View style={styles.recipemain}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{width: 473, height: 250, borderRadius: 10, padding: 0}}
            />
            <Text style={styles.Title}>Recipe Name would go here</Text>
            <Text style={styles.Sub}>Indian British chiken recipe</Text>
            <Text style={styles.Desc}>Ingriediends</Text>
            <Text style={styles.Prep}>Prep Time: 45mins</Text>
          </View>
          <View style={styles.recipemain}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{width: 473, height: 250, borderRadius: 10, padding: 0}}
            />
            <Text style={styles.Title}>Chiken Tikka</Text>
            <Text style={styles.Sub}>Indian British chiken recipe</Text>
            <Text style={styles.Desc}>Ingriediends</Text>
            <Text style={styles.Prep}>Prep Time: 45mins</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  recipemain: {
    backgroundColor: 'blue',
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  header: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  Title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  Sub: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  Desc: {
    fontSize: 24,
  },
  Prep: {
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default App;
