import { LINKS } from "../../../../../../constants/links";
import styles from "../../Header.module.css";
import MenuItemWithIconAndTexts from "../MenuItemWithIconAndTexts";

const AttendanceMenu: React.FC<{ ClassName?: string }> = ({ ClassName }) => {
  return (
    <div className={ClassName ? ClassName : `${styles.menu} right-0 py-24`}>
      <div className="px-16 pt-16">
        <p className="mb-8 font-bold">Ainda não sou cliente</p>
        <MenuItemWithIconAndTexts
          iconName="phone"
          text="Pedir pelo Telefone"
          description="3004-9137"
          href={LINKS.NOT_CLIENT_PHONE}
        />
        <MenuItemWithIconAndTexts
          iconName="whatsapp"
          text="Pedir pelo WhatsApp"
          href={LINKS.NOT_CLIENT_WHATSAPP}
        />
      </div>
      <hr className="my-8 bg-display-200" />
      <div className="px-16 pt-16">
        <p className="mb-8 font-bold">Já sou cliente</p>
        <MenuItemWithIconAndTexts
          iconName="life-buoy"
          text="Central de ajuda"
          href={LINKS.HELP_CENTER}
        />
        <div className="xs:hidden">
          <MenuItemWithIconAndTexts
            iconName="logo-on"
            text="Atendimento no chat do App"
            href={LINKS.APP_LINK}
          />
        </div>
        <MenuItemWithIconAndTexts
          iconName="whatsapp"
          text="Atendimento pelo WhatsApp"
          href={LINKS.CLIENT_WHATSAPP}
        />
      </div>
      <hr className="my-8 bg-display-200" />
      <div className="px-16">
        <MenuItemWithIconAndTexts
          iconName="truck"
          text="Rastreio do pedido"
          href={LINKS.TRACK_ORDER}
        />
      </div>
    </div>
  );
};

export default AttendanceMenu;
