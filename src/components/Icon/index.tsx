import dynamic from "next/dynamic";

const BatteryCharging = dynamic(() => import("./icons/BatteryCharging"));
const Calendar = dynamic(() => import("./icons/Calendar"));
const Coupon = dynamic(() => import("./icons/Coupon"));
const ChevronDown = dynamic(() => import("./icons/ChevronDown"));
const ChevronUp = dynamic(() => import("./icons/ChevronUp"));
const Close = dynamic(() => import("./icons/Close"));
const Contactless = dynamic(() => import("./icons/Contactless"));
const CustomerSupport = dynamic(() => import("./icons/CustomerSupport"));
const DeliveryFast = dynamic(() => import("./icons/DeliveryFast"));
const LifeBuoy = dynamic(() => import("./icons/LifeBuoy"));
const LogoOn = dynamic(() => import("./icons/LogoOn"));
const Menu = dynamic(() => import("./icons/Menu"));
const Money = dynamic(() => import("./icons/Money"));
const PCheck = dynamic(() => import("./icons/PCheck"));
const Phone = dynamic(() => import("./icons/Phone"));
const PosSmall = dynamic(() => import("./icons/PosSmall"));
const PX = dynamic(() => import("./icons/PX"));
const Question = dynamic(() => import("./icons/Question"));
const RChat = dynamic(() => import("./icons/RChat"));
const Receipt = dynamic(() => import("./icons/Receipt"));
const RoundDollar = dynamic(() => import("./icons/RoundDollar"));
const ShoppingCart = dynamic(() => import("./icons/ShoppingCart"));
const SmartPhone = dynamic(() => import("./icons/SmartPhone"));
const Truck = dynamic(() => import("./icons/Truck"));
const Whatsapp = dynamic(() => import("./icons/Whatsapp"));
const Wifi = dynamic(() => import("./icons/Wifi"));
const CircleName = dynamic(() => import("./icons/CircleName"));
const Plus = dynamic(() => import("./icons/Plus"));
const LogoTon = dynamic(() => import("./icons/logoTon"));

const Icons = {
  "battery-charging": BatteryCharging,
  calendar: Calendar,
  contactless: Contactless,
  coupon: Coupon,
  "delivery-fast": DeliveryFast,
  "p-x": PX,
  "r-chat": RChat,
  wifi: Wifi,
  "p-check": PCheck,
  receipt: Receipt,
  "logo-on": LogoOn,
  truck: Truck,
  phone: Phone,
  whatsapp: Whatsapp,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  close: Close,
  money: Money,
  "circle-name": CircleName,
  "pos-small": PosSmall,
  question: Question,
  "round-dollar": RoundDollar,
  "shopping-cart": ShoppingCart,
  "smart-phone": SmartPhone,
  menu: Menu,
  "customer-support": CustomerSupport,
  "life-buoy": LifeBuoy,
  plus: Plus,
  "logo-ton": LogoTon,
} as const;

export type IconsNames = keyof typeof Icons;

type IconProps = {
  name: IconsNames;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const NewIcon = Icons[name];

  return <NewIcon className={className} />;
};

export default Icon;
