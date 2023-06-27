import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Heart from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SubComment = () => {
  return (
    <View style={{marginHorizontal: 40, marginBottom: 10}}>
      <View style={styles.imageTextContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/man.png')}
        />
        <Text style={styles.imageText}>레이블라우스</Text>

        <Text style={styles.subTitle}>우스</Text>

        <Entypo
          style={styles.imageThreeDot}
          name="dots-three-horizontal"
          color="#c8cfda"
          size={20}
        />
      </View>
      <Text style={styles.commentText}>
        어머 제가 있던 테이블이 제일 반응이 좋았나보네요 우짤래미님도 아시겠지만
        저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이
        도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고
        하니 꼭 봐주세용~!
      </Text>
      <View style={{flexDirection: 'row', marginTop: 5, marginStart: 65}}>
        <Heart name="hearto" size={20} />
        <Text style={{marginStart: 5}}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 500,
    backgroundColor: '#edeef3',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTilte: {
    marginTop: 10,
    marginStart: 13,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  textDiscription: {
    marginStart: 13,
    color: '#000',
    lineHeight: 20,
  },
  imageTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 20,
    justifyContent: 'space-between',
  },
  image: {
    height: 40,
    width: 40,
  },
  imageText: {
    marginStart: 5,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
  },
  commentText: {
    marginStart: 65,
    marginEnd: 20,
    textAlign: 'left',
  },
  subTitle: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginStart: 5,
    flex: 2.2,
  },
  imageThreeDot: {
    marginStart: 5,
    flex: 0.3,
    alignSelf: 'center',
  },
});
export default SubComment;
