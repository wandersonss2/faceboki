// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProfileScreenStyles';

const ProfileScreen = ({ route, navigation, setIsLoggedIn }) => {
  const { name, email, profileImage } = route.params || {};

  const handleLogout = () => {
    // Implement logout logic here
    setIsLoggedIn(false);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <Text style={styles.noImageText}>No profile image selected</Text>
      )}
      <View style={styles.profileItem}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name || 'N/A'}</Text>
      </View>
      <View style={styles.profileItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email || 'N/A'}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={styles.buttonText}>Go to Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
