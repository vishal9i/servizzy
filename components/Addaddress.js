import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const Addaddress = () => {
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  //   const containerStyle = { padding: 20, };
  return (
    <View>
      <TouchableOpacity style={styles.add} onPress={() => setVisible(true)}>
        <Text style={{ fontSize: 20, color: 'gray' }}>ADD ADDRESS +</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        animationType="slide"
        transparent={true}
        //   contentContainerStyle={containerStyle}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: 'rgba(115, 115, 115, 1)',
            //   justifyContent: 'center',
            marginTop: '52%',
            marginHorizontal: 10,
            borderRadius: 7,
            justifyContent: 'space-between',
            // height: '30%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={{ color: 'white', marginLeft: 20, fontSize: 20 }}>
              Enter Address here{' '}
            </Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <AntDesign
                name="closecircle"
                size={24}
                color="rgba(190, 0, 0, 0.96)"
              />
            </TouchableOpacity>
          </View>

          <TextInput
            label="Address"
            mode="flat"
            style={{ marginVertical: '15%' }}
          />
          <TouchableOpacity style={styles.done}>
          <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Addaddress;

const styles = StyleSheet.create({
  add: {
    paddingVertical: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: '5%',
    borderRadius: 7,
    borderColor: 'gray',
  },
  done:{
    backgroundColor:"#fff",
    width:80,
    alignSelf:"center",
    alignItems:"center",
    height:30,
    borderRadius:5
  }
});
