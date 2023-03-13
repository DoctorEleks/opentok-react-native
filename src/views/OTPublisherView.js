import React, { Component } from 'react';
import { requireNativeComponent, Platform, View } from 'react-native';

class OTPublisherView extends Component {
  render() {
    return <ReactPublisher {...this.props} />;
  }
}

const publisherName = Platform.OS === 'ios' ? 'OTPublisherSwift' : 'OTPublisherViewManager';
const ReactPublisher = requireNativeComponent(publisherName, OTPublisherView);
export default OTPublisherView;
