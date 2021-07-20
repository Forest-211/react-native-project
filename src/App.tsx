import React from 'react';
import { Text, View } from 'react-native';
import Base from './Base';

interface Props {}
interface State {
    loading: boolean;
}
export default class App extends Base<Props, State> {
    constructor(props: Props) {
        // @ts-ignore
        super(props);

        // @ts-ignore
        this.state = {
            ...this.state,
            loading: false,
        };
    }

    render() {
        console.log(this.state);
        console.log(super.state);
        return (
            <View>
                <Text
                    style={{
                        color: 'red',
                        fontSize: 22,
                        marginTop: 30,
                        marginLeft: 20,
                    }}>
                    app
                </Text>
            </View>
        );
    }
}
