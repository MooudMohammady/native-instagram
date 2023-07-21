import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Post = ({ post }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
    }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}>
      <Image source={{ uri: post.profile_img }} style={styles.profile_img} />
      <Text style={{ color: "white", fontWeight: "700" }}>{post.user}</Text>
    </View>
    <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ height: "100%", resizeMode: "cover" }}
      fadeDuration={500}
    />
  </View>
);
const PostFooter = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails post={post} />
  </View>
);
const FooterButtons = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    }}>
    <View style={{ flexDirection: "row", gap: 5 }}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/heart.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/comment.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/send.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/bookmark.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);
const FooterDetails = ({ post }) => (
  <>
    <Text style={{ color: "white" }}>{post.likes} lieks</Text>
    <View style={{ marginVertical: 10 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "900" }}>{post.user} </Text>
        <Text>{post.caption}</Text>
      </Text>
    </View>
    {post.comments?.length > 0 && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
    {
      post.comments.map((c,i)=>(
        <View key={i} style={{marginTop:10}}>
          <Text style={{color:"white"}}>
            <Text style={{fontWeight:"bold"}}>{c.user} </Text>
            {c.comment}
          </Text>
        </View>
      ))
    }
  </>
);

const styles = StyleSheet.create({
  profile_img: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "tomato",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});

export default Post;
