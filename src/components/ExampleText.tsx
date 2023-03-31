import React from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | "black";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

// The ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component.

// the = "span", means we are passing a default element in case as is not passed to the component. Otherwise it's not type safe and you can pass any sorts of attributes to the span as referd on line 17 (doesn't guarantee typesafety)
export const ExampleText = <C extends React.ElementType = "span">({
  as,
  children,
  color,
  style,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";
  const InternalStyles = color ? { style: { ...style, color } } : {};

  return (
    <Component {...restProps} {...InternalStyles}>
      {children}
    </Component>
  );
};

//this {...restProps} is needed so that the href actually works. Without the spread, the href doesn't render. The a tag renders, but not the attribute.
