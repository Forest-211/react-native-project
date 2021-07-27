import React, { Dispatch } from 'react';
import { View, Text, Button } from 'react-native';
import Base from '../Base';
import { connect } from 'react-redux';
import { Action } from '../types/store/actions/counter';
import * as counterAction from '../store/actions/counter';

interface Props {
    counter: number;
}
interface PropsConnectedDispatcher {
    handlePressIncrement: () => void;
    handlePressDecrement: () => void;
}

class Counter extends Base<Props & PropsConnectedDispatcher, any> {
    render() {
        // console.log('props:', this.props);
        const { counter, handlePressIncrement, handlePressDecrement } =
            this.props;
        return (
            <View>
                <Text>{counter}</Text>
                <Button
                    title="increment"
                    onPress={() => handlePressIncrement()}
                />
                <Button
                    title="decrement"
                    onPress={() => handlePressDecrement()}
                />
            </View>
        );
    }
}

function mapStateToProps(state: any) {
    // console.log('state:', state);
    return state.counterReducer;
}

function mapDispatchToProps(dispath: Dispatch<Action<any>>) {
    return {
        handlePressIncrement() {
            return dispath(counterAction.increment());
        },
        handlePressDecrement() {
            return dispath(counterAction.decrement());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
