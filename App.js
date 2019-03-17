
import React from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native'

import Navigation from './Navigation/Navigation'

export default class App extends React.Component {

  render() {

    return (

      <SafeAreaView style={styles.main_container}>

       <View style={styles.main_container}>

          <Navigation/>

        </View>

      </SafeAreaView>

    )

  }

}



const styles = StyleSheet.create({

  main_container: {

      flex: 1

  }

})

