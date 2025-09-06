import {
  Calendar,
  ChevronRight,
  CircleCheckBig,
  ClipboardList,
  Clock,
  MapPin,
  User,
  FileText,
  Store,
  Camera,
  Image,
  Info,
  X,
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
export const FileTextIcon = ({ color, size }: Props) => {
  return <FileText color={color} size={size} />;
};
export const StoreIcon = ({ color, size }: Props) => {
  return <Store color={color} size={size} />;
};
export const CameraIcon = ({ color, size }: Props) => {
  return <Camera color={color} size={size} />;
};
export const ImageIcon = ({ color, size }: Props) => {
  return <Image color={color} size={size} />;
};
export const InfoIcon = ({ color, size }: Props) => {
  return <Info color={color} size={size} />;
};
export const XIcon = ({ color, size }: Props) => {
  return <X color={color} size={size} />;
};
