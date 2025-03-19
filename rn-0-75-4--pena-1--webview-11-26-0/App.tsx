import React, {useState} from 'react';
import Pena from '@privyid/pena-react-native';
import {SITE_URL} from '@env';
import {Modal, View, Text, Button, StyleSheet} from 'react-native';

export default function App() {
  //
  //  @ SINGLE PAGE PENA
  //
  return (
    <Pena
      url={SITE_URL}
      lang="id"
      signature={{
        x: 100,
        y: 200,
        page: 1,
        fixed: false,
      }}
      onAfterAction={payload => {
        // showToast(payload.action)
        console.log('Action: ', payload.action);
      }}
    />
  );

  //
  //  @ MODAL PENA
  //
  // const [modalVisible, setModalVisible] = useState(false);

  // return (
  //   <View style={styles.container}>
  //     <Button title="Open Modal" onPress={() => setModalVisible(true)} />

  //     <Modal
  //       animationType="slide" // Can be "fade" or "none"
  //       transparent={true} // Makes the background transparent
  //       visible={modalVisible}
  //       onRequestClose={() => setModalVisible(false)} // Required for Android
  //     >
  //       <View style={styles.modalContainer}>
  //         <View style={styles.modalContent}>
  //           <Text>Hello, I'm a Modal! 🎉</Text>
  //           <Pena
  //             url={SITE_URL}
  //             lang="id"
  //             signature={{
  //               x: 100,
  //               y: 200,
  //               page: 1,
  //               fixed: false,
  //             }}
  //             onAfterAction={payload => {
  //               // showToast(payload.action)
  //               console.log('Action: ', payload.action);
  //             }}
  //           />
  //           <Button title="Close" onPress={() => setModalVisible(false)} />
  //         </View>
  //       </View>
  //     </Modal>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
  },
});
