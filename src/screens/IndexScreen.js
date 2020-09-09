import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BlogContext from '../context/blog/blogContext';
import {FlatList} from 'react-native-gesture-handler';

const IndexScreen = () => {
  const {blogPosts, addBlogPost} = React.useContext(BlogContext);

  return (
    <View>
      <Text>Index screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
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
