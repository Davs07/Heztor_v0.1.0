"use client";

interface ItemProps {
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
  type?: "button" | "filter" | "functionality";
  items?: Object[];
  src?: string;
  alt?: string;
}

function items(props: ItemProps) {
  return <div>items</div>;
}

export default items;
