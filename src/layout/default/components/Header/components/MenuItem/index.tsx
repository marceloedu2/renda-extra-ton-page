import React from "react";
import Icon, { IconsNames } from "../../../../../../components/Icon";
import Link from "../../../../../../components/Link";

type MenuItem = {
  text: string;
  iconName: IconsNames;
  href: string;
};

const MenuItem: React.FC<MenuItem> = ({ text, iconName, href }) => {
  return (
    <div className="w-full bg-display-0">
      <Link href={href}>
        <a
          aria-label={text}
          className="flex p-16 my-auto font-medium text-display-900 paragraph-16"
        >
          <Icon name={iconName as IconsNames} className="mr-12 fill-current" />
          {text}
        </a>
      </Link>
    </div>
  );
};

export default MenuItem;
