import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({index}) => ({
  ...index,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'index',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="index-page">
        index
      </View>
    )
  }
}
