import { Component } from 'react';

interface Props {}

interface State {
    name: boolean;
}

export default class Base<P, S> extends Component<Props & P, State & S> {
    constructor(props: Props) {
        //@ts-ignore
        super(props);

        // @ts-ignore
        this.state = {
            name: false,
        };
    }
}
