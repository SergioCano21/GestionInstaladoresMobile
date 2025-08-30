import {
  Calendar,
  ChevronRight,
  CircleCheckBig,
  ClipboardList,
  Clock,
  MapPin,
  User,
} from "lucide-react-native";

interface Props {
  color: string;
  size: number;
}

export const ClipboardListIcon = ({ color, size }: Props) => {
  return <ClipboardList color={color} size={size} />;
};
export const CircleCheckIcon = ({ color, size }: Props) => {
  return <CircleCheckBig color={color} size={size} />;
};
export const CalendarIcon = ({ color, size }: Props) => {
  return <Calendar color={color} size={size} />;
};
export const UserIcon = ({ color, size }: Props) => {
  return <User color={color} size={size} />;
};
export const ChevronRightIcon = ({ color, size }: Props) => {
  return <ChevronRight color={color} size={size} />;
};
export const ClockIcon = ({ color, size }: Props) => {
  return <Clock color={color} size={size} />;
};
export const MapPinIcon = ({ color, size }: Props) => {
  return <MapPin color={color} size={size} />;
};
