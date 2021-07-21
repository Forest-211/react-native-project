import React from 'react';
import { Button, Text, View } from 'react-native';
import Spinkit from 'react-native-spinkit';
import Base from './Base';
import { handleGetOnece } from './service/todos';
import appStyles from './assets/styles/screens/app';
import Toast from 'react-native-toast-message';
import { Todo } from './types/service/todo';

interface Props {}
interface State {
    loading: boolean;
    loadingText: string;
    todo: Todo;
}
export default class App extends Base<Props, State> {
    constructor(props: Props) {
        // @ts-ignore
        super(props);

        // @ts-ignore
        this.state = {
            ...this.state,
            loading: false,
            loadingText: '加载中...',
            // type: [ // loading 加载图标可选种类
            //     'CircleFlip',
            //     'Bounce',
            //     'Wave',
            //     'WanderingCubes',
            //     'Pulse',
            //     'ChasingDots',
            //     'ThreeBounce',
            //     'Circle',
            //     '9CubeGrid',
            //     'WordPress',
            //     'FadingCircle',
            //     'FadingCircleAlt',
            //     'Arc',
            //     'ArcAlt',
            // ],
        };
    }

    // 获取数据
    async handleClickGetData() {
        this.setState({ loading: true });
        try {
            const res = await handleGetOnece();
            console.log('res:', res);
            this.setState({ loading: false, todo: res });
        } catch (error) {
            console.log('error:', error);
        }
    }

    handleToastMessage() {
        Toast.show({
            type: 'error',
            text1: 'title1',
            text2: 'This is some something1 👋',
        });
        Toast.show({
            type: 'success',
            text1: 'title2',
            autoHide: false,
            text2: 'This is some something2 👋',
        });
    }

    render() {
        const { loading, loadingText, todo } = this.state;
        console.log('todo:', todo);
        return (
            <>
                {/* loading */}
                {loading && (
                    <View style={[appStyles.loading]}>
                        <Spinkit
                            isVisible
                            size={50}
                            color="#fff"
                            type="Bounce"
                        />
                        <Text style={[appStyles.loadingText]}>
                            {loadingText}
                        </Text>
                    </View>
                )}

                {/*  */}
                <Text
                    style={{
                        color: 'red',
                        fontSize: 22,
                        marginTop: 30,
                        marginLeft: 20,
                    }}>
                    app
                </Text>

                {todo && (
                    <>
                        <Text>{todo.title}</Text>
                    </>
                )}

                <Button
                    title="获取数据"
                    onPress={() => this.handleClickGetData()}
                />
                <Button
                    title="Toast-message"
                    onPress={() => this.handleToastMessage()}
                />
                <Toast ref={ref => Toast.setRef(ref)} />
            </>
        );
    }
}
