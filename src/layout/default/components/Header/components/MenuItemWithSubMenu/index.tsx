import { m, Variants } from "";
import React, { useState } from "react";
import Icon, { IconsNames } from "../../../../../../components/Icon";

export type MenuWithSubMenuProps = {
  text: string;
  iconName: IconsNames;
  children: React.ReactNode;
};

const subMenuAnimation: Variants = {
  open: {
    opacity: 1,
    maxHeight: 1000,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MenuWithSubMenu: React.FC<MenuWithSubMenuProps> = ({
  text,
  iconName,
  children,
}) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  return (
    <div
      className={`w-full ${subMenuIsOpen ? "bg-display-50" : "bg-display-0"}`}
    >
      <button
        type="button"
        aria-label={text}
        onClick={() => setSubMenuIsOpen((value) => !value)}
        className="flex p-16 my-auto w-full font-medium text-display-900 paragraph-16"
      >
        <Icon name={iconName} className="mr-12 fill-current" />
        {text}
        <Icon
          name="chevron-down"
          className={`fill-current ml-auto transform transition-all ${
            subMenuIsOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <m.div
        className="flex overflow-hidden flex-col pl-16 bg-display-0"
        animate={subMenuIsOpen ? "open" : "closed"}
        variants={subMenuAnimation}
        initial="closed"
      >
        {children}
        <hr className="ml-[-16px] bg-display-200" />
      </m.div>
    </div>
  );
};

export default MenuWithSubMenu;
