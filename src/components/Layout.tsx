import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="flex flex-col p-5">{children}</div>;
}
