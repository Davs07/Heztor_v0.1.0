import React from "react";

interface ItemsProps {
  icon: React.ReactNode;
  name: string;
}

function ItemSidebar({ icon: Icon, name }: ItemsProps) {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
}

export default ItemSidebar;
