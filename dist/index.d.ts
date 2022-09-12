/// <reference types="react" />
declare type Data = {
    title: string;
    body: string | JSX.Element;
};
declare type propType = {
    data: Data[];
    defaultExpandItem?: number;
};
declare const Accordion: ({ data, defaultExpandItem }: propType) => JSX.Element;

export { Accordion as default };
