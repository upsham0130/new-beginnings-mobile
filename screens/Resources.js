import * as React from 'react';
import { View, ScrollView, Text} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";

export default function Resources({navigation}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
      const resp = await fetch("https://apis.yinftw.com/nb/resources/food");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };

    const renderItem = ({ item }) => {
      return (
        <Box px={5} py={2} rounded="md" bg="primary.800" my={2}>
          {item.Name}
        </Box>
      )
    };

    useEffect(() => {
      fetchData();
    }, []);

    return(
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
    )
}