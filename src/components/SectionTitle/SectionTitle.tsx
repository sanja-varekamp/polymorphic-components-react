import React from "react";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return <h2 className="text-3xl font-extrabold mt-6 mb-3">{title}</h2>;
}
