import Icon, { IconsNames } from "../../../../../../components/Icon";

export type MenuItemWithIconAndTextsProps = {
  text: string;
  description?: string;
  smallDescription?: string;
  iconName: IconsNames;
  href?: string;
  onClick?: () => void;
};

const MenuItemWithIconAndTexts = ({
  text,
  description,
  iconName,
  smallDescription,
  href,
  onClick,
}: MenuItemWithIconAndTextsProps) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center p-16 mx-[-16px] hover:text-ton-500 lg:hover:bg-display-50"
  >
    <Icon name={iconName} className="w-24 h-24 fill-current" />
    <p className="flex flex-col ml-16">
      <span className="font-medium">{text}</span>
      {description && <span className="mt-2 font-medium">{description}</span>}

      {smallDescription && (
        <span className="mt-2 paragraph-14">{smallDescription}</span>
      )}
    </p>
  </a>
);

export default MenuItemWithIconAndTexts;
