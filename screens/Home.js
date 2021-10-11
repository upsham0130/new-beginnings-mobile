import * as React from 'react';
import { View, ScrollView, Text} from 'react-native';
import Box from '../components/Box'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'orange'}}>
        <ScrollView>
        <LinearGradient
            colors={['rgba(255,255,255,0.9)', 'transparent']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%'
              }}
        />
        <Text style={{textAlign:"center", fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginBottom: '5%'}}>Welcome to New Beginnings!</Text>
          <Box color={"#ff8575"} txt="Our mission is to help formerly incarcerated individuals secure employment, establish strong relationships with mentors, and gain access to local resources in order to ease their transition from prison."/>
          <Box color={"#ff8575"} title="Mentorship" txt="Connect with like-minded people who turned their lives around upon re-entering society. Studies show that people with strong mentors are twice as likely to get employed."/>
          <Box color={"#ff8575"} title="Employment" txt="Reach out to employers who don’t discriminate based on past convictions (If you’d like to have your business featured please contact us at newbeginnings.innb@gmail.com)."/>
          <Box color={"#ff8575"} title="Resources" txt="Here you can find a cirrculum to guide your professional development, (as well as other local resources: affordable housing, local support groups, transportation etc.)"/>            
        </ScrollView>
        </View>
      )
}