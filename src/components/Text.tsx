import React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

// The ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component.

// the = "span", means we are passing a default element in case as is not passed to the component. Otherwise it's not type safe and you can pass any sorts of attributes to the span as referd on line 17 (doesn't guarantee typesafety)
export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};

//this {...restProps} is needed so that the href actually works. Without the spread, the href doesn't render. The a tag renders, but not the attribute.
