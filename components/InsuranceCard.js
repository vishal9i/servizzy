import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InsuranceCard = ({ exdate, id, status,alrt }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>{id}</Text>
        </View>
        {status == true ? (
          <Text style={{ color: 'green' }}>Active</Text>
        ) : (
          <Text style={{ color: '#f07102' }}>Expiring soon </Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={{ color: 'gray', margin: 5 }}>Insurance Expiry</Text>
        <Text style={{ marginHorizontal: 15 }}>{exdate}</Text>
      </View>
      <View style={styles.info}>
        <Text style={{ color: 'gray', margin: 5 }}>Next Alert On</Text>
        <Text style={{ marginHorizontal: 15 }}>
          {/* {nalert} */}
          {alrt?alrt:""}
        </Text>
      </View>
    </View>
  );
};

export default InsuranceCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
    borderColor: '#f07102',
  },
});
