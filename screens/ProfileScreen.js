// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProfileScreenStyles';

const ProfileScreen = ({ route, navigation }) => {
  const { name, email, profileImage } = route.params || {};

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
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
