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
    attributes?: any;
    nodeSvgShape?: IShape;
}

export interface IProps {
    data: ITree[];
}
  
interface IShape {
    shape: string;
    shapeProps: IShapeProps;
}
  
interface IShapeProps {
    rx: number;
    ry: number;
    fill: string;
}