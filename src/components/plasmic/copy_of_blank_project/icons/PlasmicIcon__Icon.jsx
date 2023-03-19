// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.455.493a.5.5 0 01.951 0L8.49 3.826a.5.5 0 00.476.346h3.505a.5.5 0 01.294.904l-2.836 2.06a.5.5 0 00-.181.56l1.083 3.333a.5.5 0 01-.77.56L7.225 9.527a.5.5 0 00-.588 0L3.8 11.588a.5.5 0 01-.77-.559l1.084-3.333a.5.5 0 00-.182-.56l-2.835-2.06a.5.5 0 01.294-.904h3.505a.5.5 0 00.475-.346L6.455.493z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
