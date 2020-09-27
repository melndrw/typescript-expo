import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  Body,
  CardItem,
  Text,
  Left,
} from 'native-base';
import { StyleSheet, Image } from 'react-native';

const Todolist = () => {
  return (
    <Container>
      <Content padder>
        <Card style={styles.cardBoarder}>
          <CardItem header>
            <Left>
              <Image
                style={styles.userProfile}
                source={require('../../../assets/images/UserA.jpg')}
              />
              <Body>
                <Text>Alexandra Daddario</Text>
                <Text>User A</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                NativeBase is a free and open source framework that enable
                developers to build high-quality mobile apps using React Native
                iOS and Android apps with a fusion of ES6.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Todolist;

const styles = StyleSheet.create({
  cardBoarder: {
    borderRadius: 10,
  },
  userProfile: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
