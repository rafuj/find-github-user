import React from "react";

export default function Input({ value, className, ...rest }) {
  return <input className={className} value={value} {...rest} />;
}
