import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";

import AccordionItem from "../components/AccordionItem";

afterEach(() => {
  cleanup();
});

describe("React Accordion Item", () => {
  const setIndexHandler = jest.fn();

  test("Accordion Open", () => {
    render(
      <AccordionItem header="Hello World" setIndexHandler={setIndexHandler} index={0} currentIndex={0}>
        "This is a Test!"
      </AccordionItem>
    );
    const accordionItem = screen.queryByTestId("accordionItem");
    expect(accordionItem).toBeInTheDocument();

    const accordionItemTitle = screen.queryByTestId("accordionItemTitle");
    expect(accordionItemTitle).toHaveTextContent("Hello World");

    const accordionItemBody = screen.queryByTestId("accordionItemBody");
    expect(accordionItemBody).toHaveTextContent("This is a Test!");
  });

  test("Accordion Item Not Open", () => {
    render(
      <AccordionItem header="Hello World 2" setIndexHandler={setIndexHandler} index={0} currentIndex={1}>
        "This is a Test! 2"
      </AccordionItem>
    );

    const accordionItemBody = screen.queryAllByTestId("accordionItemBody");
    expect(accordionItemBody).toHaveLength(0);
  });
});
