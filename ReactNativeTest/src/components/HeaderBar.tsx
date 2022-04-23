import React from 'react'
import { Appbar } from 'react-native-paper';

const HeaderBar = () => {
    //const _goBack = () => console.log('Went back');

    //const _handleSearch = () => console.log('Searching');
  
    //const _handleMore = () => console.log('Shown more');
  
  return (
    <Appbar.Header>
    <Appbar.Content title="DogiApp" subtitle="" />
    </Appbar.Header>
  )
}

export default HeaderBar