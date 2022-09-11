import React from "react";
import DownArrow from "../assets/DownArrow.svg";

import {
  AccordionItemBody,
  AccordionItemHeader,
  AccordionItemHeaderTitle,
  AccordionItemIcon,
  AccordionItemStyle,
} from "./AccordionStyle";

type propTypes = {
  children: string | JSX.Element;
  header: string;
  index: number;
  currentIndex: number;
  setIndexHandler: Function;
};

const AccordionItem = ({ children, header, setIndexHandler, index, currentIndex }: propTypes) => {
  const isOpen = currentIndex === index;

  return (
    <AccordionItemStyle data-testid="accordionItem">
      <AccordionItemHeader onClick={() => setIndexHandler(index)}>
        <AccordionItemHeaderTitle data-testid="accordionItemTitle">{header}</AccordionItemHeaderTitle>
        <AccordionItemIcon src={DownArrow} alt="Icon" open={isOpen} />
      </AccordionItemHeader>
      {isOpen ? <AccordionItemBody data-testid="accordionItemBody">{children}</AccordionItemBody> : ""}
    </AccordionItemStyle>
  );
};

export default AccordionItem;
