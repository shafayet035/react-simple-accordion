import React, { useState } from "react";

import styled from "styled-components";
import AccordionItem from "./AccordionItem";

const AccordionMain = styled.div``;

type Data = {
  title: string;
  body: string | JSX.Element;
};

type propType = {
  data: Data[];
  defaultExpandItem?: number;
};

const Accordion = ({ data, defaultExpandItem = -1 }: propType) => {
  const [currentIndex, setCurrentIndex] = useState(defaultExpandItem - 1);

  const setIndexHandler = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <AccordionMain>
      {data.map((item, index) => (
        <AccordionItem
          header={item.title}
          key={index}
          setIndexHandler={setIndexHandler}
          index={index}
          currentIndex={currentIndex}
        >
          {item.body}
        </AccordionItem>
      ))}
    </AccordionMain>
  );
};

export default Accordion;
