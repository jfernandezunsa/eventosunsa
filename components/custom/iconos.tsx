import { LucideHome } from 'lucide-react';
interface Props {
  name: any
  color: string
  size: number
}
const Icon = ({ name, color, size }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
