import styled from "styled-components";

export const AccordionItemStyle = styled.div`
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const AccordionItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  alight-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding: 15px;
  user-select: none;
`;
export const AccordionItemHeaderTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
`;
export const AccordionItemIcon = styled.div<{ open: boolean }>`
  width: 25px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  transform: rotate(${(props) => (props.open ? "-180deg" : "0deg")});
  margin-right: ${(props) => (props.open ? "5px" : "0")};
`;
export const AccordionItemBody = styled.div`
  padding: 15px;
  line-height: 25px;
`;
