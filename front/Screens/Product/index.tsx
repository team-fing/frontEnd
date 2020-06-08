import React, {useState, useContext, useLayoutEffect, useEffect} from 'react';
import {
  NativeScrollEvent,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import IconButton from '~/Components/IconButton';

type NavigationProp = StackNavigationProp<SearchTabParamList, 'mainSearch'>;

interface Props {
  navigation: NavigationProp;
}

interface ILoc {
  loc?: string;
}

interface ILocation {
  latitude: number;
  longitude: number;
}


const Container = Styled.View`
  flex: 1;
`;
const LabelContainer = Styled.View`
  flex-direction: row;
`;


const ProductItem = Styled.View`
  flex: 1;
  
`;

const Stack = createStackNavigator();
const API_KEY = 'devU01TX0FVVEgyMDIwMDYwMjExMzgwMzEwOTgyMDc=';
const Label = Styled.Text``;

const mainProduct = ({navigation}: Props) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName="search"
          onPress={() => navigation.navigate('mainSearch')}
        />
      ),
    });
  }, []);
  return (
    <Container>
      
              
      
      
    </Container>
  );
};

export default mainProduct;