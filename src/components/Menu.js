import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: 'ANA SAYFA', screen: 'Home' },
    { title: 'Hakkımızda', screen: 'About' },
    { title: 'AYLIK BÜLTEN', screen: 'MonthlyBulletin' },
    { title: 'ÇIKARILABİLİR ETKİNLİK SAYFALARI', screen: 'ActivityPages' },
    { title: 'Kitap Önerileri', screen: 'BookRecommendations' },
    { title: 'Film Önerileri', screen: 'MovieRecommendations' },
    { title: 'Zeka Oyunları', screen: 'BrainGames' },
    { title: 'EN YAKIN KÜTÜPHANE', screen: 'NearestLibrary' },
    { title: 'Tüm Yazılar', screen: 'AllArticles' },
    { title: 'İletişim', screen: 'Contact' },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
  },
});

export default Menu;