import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AccordionItemBody,
  AccordionItemHeader,
  AccordionItemHeaderTitle,
  AccordionItemIcon,
  AccordionItemStyle,
} from "./AccordionStyle";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

type propTypes = {
  children: string | JSX.Element;
  header: string;
  index: number;
  currentIndex: number;
  setIndexHandler: Function;
};

const AccordionItem = ({ children, header, setIndexHandler, index, currentIndex }: propTypes) => {
  const isOpen = currentIndex === index;

  const setHandler = (): void => {
    setIndexHandler(currentIndex === index ? -1 : index);
  };

  return (
    <AccordionItemStyle data-testid="accordionItem">
      <AccordionItemHeader onClick={setHandler}>
        <AccordionItemHeaderTitle data-testid="accordionItemTitle">{header}</AccordionItemHeaderTitle>
        <AccordionItemIcon open={isOpen}>
          <FontAwesomeIcon icon={faArrowCircleDown} size="lg" />
        </AccordionItemIcon>
      </AccordionItemHeader>
      {isOpen ? <AccordionItemBody data-testid="accordionItemBody">{children}</AccordionItemBody> : ""}
    </AccordionItemStyle>
  );
};

export default AccordionItem;
