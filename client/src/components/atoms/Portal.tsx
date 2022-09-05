import React from 'react';
import reactDom from 'react-dom';

interface Props {
  element: string;
  children?: React.ReactNode;
}
const Portal = ({ element, children }: Props) => {
  const el = document.getElementById(element) as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default Portal;
