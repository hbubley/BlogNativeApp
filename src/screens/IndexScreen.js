import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BlogContext from '../context/blog/blogContext';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
const IndexScreen = () => {
  const {blogPosts, addBlogPost} = React.useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <Icon name="search" size={30} />
      <FlatList
        data={blogPosts}
        keyExtractor={(post) => post.title}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
