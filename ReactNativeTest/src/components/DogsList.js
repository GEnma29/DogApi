import React, { useEffect , useState } from 'react'
import { View,ScrollView,SectionList  } from 'react-native'
import axios from 'axios';
import { Text } from 'react-native-paper';




const DogsList = () => {
  const [dataDogs, setDataDogs] = useState([])
  let Test 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://dog.ceo/api/breeds/list/all');
        console.log(typeof(response.message))
        setDataDogs(response.message)
        console.log(dataDogs)
        //setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchApi = async () =>{
      const data = await axios({
        method:'GET',
        url:'https://dog.ceo/api/breeds/list/all'
      })
      .then((response) =>  response.data.message)
      .catch((error) => console.error(error))
      .finally(setLoading(true))
      
      
    }
    fetchApi
  })
 /*
  if (loading === true ) {
    for(const [key, value] of Object.entries(dataDogs)){
      return(
        <View>
          <Text>{key}</Text>
          <Text>{value}</Text>
        </View>
      )
    }
  }else {
    return(
      <View></View>
    )
  }*/

  
   
  return(
    <ScrollView>
    {loading && <Text>Loading</Text>}
    {!loading && (
      <View>
        <Text>Doing stuff with data</Text>
        {
        
            Object.entries(dataDogs).map((value)=><Text>{value}</Text>)
          
        }
         
      </View>
    )}
    </ScrollView>
  )
          
        
        
  

  
}

export default DogsList