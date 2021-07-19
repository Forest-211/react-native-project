import React, { Component } from 'react';
import { View } from 'react-native';

interface Props {}

interface State {}

export default class Base<P, S> extends Component<Props & P, State & S> {
    render() {
        return <View>base tamplate</View>;
    }
}
