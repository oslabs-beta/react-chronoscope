export interface IMessage {
    data: IMessageData;
}

export interface IMessageData {
    action: string;
    payload: ITree;
}

export interface ITree {
    name?: string;
    children?: ITree[];
    stats?: any;
    nodeSvgShape?: IShape;
}

export interface ITreeProps {
    data: ITree[];
}

export interface ITimelineProps {
    data: any[];
    options: object;
}

export interface IShape {
    shape: string;
    shapeProps: IShapeProps;
}

interface IShapeProps {
    rx: number;
    ry: number;
    fill: string;
}

export interface IStateAndProps {
    name?: any;
    state?: any;
    props?: any;
    renderTotal?: any;
}
