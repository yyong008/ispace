import React from "react";
import "./index.css";

const SpaceItem = ({ children }: any) => (
  <div className="i-space-item">{children}</div>
);
export const Space = (props: any) => {
  if (React.Children.count(props.children) <= 1) {
    return props.children;
  }

  return (
    <div className="i-space" style={props.styles ? props.styles : {}}>
      {React.Children.map(props.children, (children: any) => {
        return <SpaceItem>{children}</SpaceItem>;
      })}
    </div>
  );
};
