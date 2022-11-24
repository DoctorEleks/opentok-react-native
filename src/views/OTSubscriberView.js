import React, { Component } from 'react';
import { requireNativeComponent, Platform, View } from 'react-native';

class OTSubscriberView extends Component {
  render() {
    return <ReactSubscriber {...this.props} />;
  }
}

const subscriberName = Platform.OS === 'ios' ? 'OTSubscriberSwift' : 'OTSubscriberViewManager';
const ReactSubscriber = requireNativeComponent(subscriberName, OTSubscriberView);
export default OTSubscriberView;
