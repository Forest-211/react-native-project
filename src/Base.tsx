import { Component } from 'react';
import { RootStackNavigation } from './navigator/navigator';

interface Props {
    navigation: RootStackNavigation;
}

interface State {
    name: boolean;
}

export default class Base<P, S> extends Component<Props & P, State & S> {
    constructor(props: Props) {
        // @ts-ignore
        super(props);

        // @ts-ignore
        this.state = {
            name: false,
        };
    }
}
