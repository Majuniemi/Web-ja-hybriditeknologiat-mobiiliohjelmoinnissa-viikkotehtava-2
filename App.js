import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyleBold}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.start}>
        <Pressable
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show modal message</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  start: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 150,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  textStyleBold: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center',
  },
});

export default App;