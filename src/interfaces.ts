export interface IMessage {
    data: IMessageData;
}

export interface IMessageData {
    action: string;
    payload: ITree;
}

export interface ITree {
    name: string;
    children: ITree[];
    attributes?: any;
    nodeSvgShape?: IShape;
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