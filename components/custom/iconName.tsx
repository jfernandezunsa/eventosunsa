import { icons } from 'lucide-react';
import React from 'react';

interface Props {
  name: string;
  color: string;
  size: number;
}

const Icon = ({ name, color, size }: Props) => {
  const LucideIcon = (icons as Record<string, any>)[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react.`);
    return null;
  }

  return <LucideIcon color={color} size={size} />;
};

export default Icon;

