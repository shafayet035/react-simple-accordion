/// <reference types="react" />
declare type propTypes = {
    children: string | JSX.Element;
    header: string;
    index: number;
    currentIndex: number;
    setIndexHandler: Function;
};
declare const AccordionItem: ({ children, header, setIndexHandler, index, currentIndex }: propTypes) => JSX.Element;
export default AccordionItem;
