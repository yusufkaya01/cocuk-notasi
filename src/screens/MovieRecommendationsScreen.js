import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieRecommendationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Film Önerileri</Text>
      <Text style={styles.content}>Bu sayfa film önerilerini içerir.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
});

export default MovieRecommendationsScreen;