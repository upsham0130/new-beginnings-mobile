import * as React from 'react';
import { View, ScrollView, Text, Button} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Resources({navigation}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(true);
    const toggleText = () => setShow(show => !show)

    const fetchData = async () => {
      const resp = await fetch("https://apis.yinftw.com/nb/resources/food");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };

    const renderItem = ({ item }) => {
      return (
        <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
          {item.Name}
        </Box>
      )
    };

    useEffect(() => {
      fetchData();
    }, []);

    return(
      <SafeAreaView>
        <Button onPress={() => setShow(show => !show)} title="Show" />
        {show && ( <SafeAreaView>
          <ScrollView>
            <NativeBaseProvider>
              <Center flex={1}>
              {loading && <Box>Loading..</Box>}
              <Box>Using Fetch API</Box>
              {data && (
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.Address}
                />
              )}
              </Center>
            </NativeBaseProvider>
          </ScrollView>
          </SafeAreaView>
        )}
      </SafeAreaView>
    )
}