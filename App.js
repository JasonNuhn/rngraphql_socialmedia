import React from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image
          style={styles.topImage}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        {/* <Image
        /> */}
        <View style={styles.buttonRow}>
          <Button style={styles.button} title={'like'} onPress={console.log}/>
          <Button style={styles.button} title={'share'} onPress={console.log}/>
          <Button style={styles.button} title={'comment'} onPress={console.log}/>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.comment}>Some User: A comment on the picture</Text>
          <Text style={styles.comment}>Another User: A comment on the picture</Text>
          <Text style={styles.comment}>And Another User: A comment on the picture</Text>
        </View>
        {/* <View style={styles.imagePair}>
          <Image
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        </View>
        <Text style={styles.textBlock}>This is a bunch of smaller text that is giving information about the two images up above.  You might see this kind of design on a new app.</Text>
        <Text style={styles.header}>Header</Text>
        <View style={styles.imagePair}>
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
          <Image 
            style={styles.pageImage}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} />
        </View> */}
        <Text style={styles.textBlock}>This is a bunch of smaller text that is giving information about the two images up above.  You might see this kind of design on a new app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topImage: {
    height: 400,
    alignSelf: 'stretch',
  },
  header: {
    marginTop: 25,
    fontSize: 50,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  commentContainer: {
    marginTop: 25,
  },
  comment: {
    fontSize: 20,
    marginBottom: 15,
  },
  // imagePair: {
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // pageImage: {
  //   flex: 1,
  //   height: 150,
  // },
  // textBlock: {
  //   paddingLeft: 5,
  // },
});
