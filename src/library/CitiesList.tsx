import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import styled from 'styled-components/native';

const ItemContainer = styled(ListItem).attrs({
  containerStyle: {justifyContent: 'center', alignItems: 'center'},
})``;

type Props = {
  data: ICityData[];
  onSelectedCity: (cityKey: string) => void;
};

const CitiesList: React.FC<Props> = ({data, onSelectedCity}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.Key}
      renderItem={({item}) => (
        <ItemContainer onPress={() => onSelectedCity(item.Key)}>
          <ListItem.Title>
            {item.EnglishName} - {item.AdministrativeArea.ID}
          </ListItem.Title>
        </ItemContainer>
      )}
    />
  );
};

export default CitiesList;
