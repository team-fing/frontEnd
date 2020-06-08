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
import IconButton31 from '~/Components/IconButton31';
import IconButton from '~/Components/IconButton';
type NavigationProp = StackNavigationProp<MeetingNaviParamList, 'mainMeetings'>;

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
  
`;


const MeetingItem = Styled.View`
position: absolute;
margin-top:500px;
align-self: flex-end;
justify-content: flex-end;
  
`;

const Stack = createStackNavigator();

const Label = Styled.Text``;

const mainMeetings = ({navigation}: Props) => {

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
      <MeetingItem>
      <IconButton31
          iconName="add"
          
          onPress={() => navigation.navigate('PostMeeting')}
        />

      </MeetingItem>
          
    </Container>
  );
};

export default mainMeetings;