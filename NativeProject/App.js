import React from 'react';

import {View,ScrollView} from 'react-native';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';


function App() {
  return (
    <>
        <View style={{ flex:1, backgroundColor : '#BBE7FE'}}>
          <PageTitle>TODO APP</PageTitle>
          <AppHeader/>
    
          <ScrollView>
            <AppContent/>
          </ScrollView>

      </View>
    </>
  );
}
export default App;
