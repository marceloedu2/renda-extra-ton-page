import Image from "next/image";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { LINKS } from "../../../../../../constants/links";

import styles from "../../Header.module.css";

type DownloadAppMenuProps = {
  useMenuStyle?: boolean;
};

const DownloadAppMenu: React.FC<DownloadAppMenuProps> = ({
  useMenuStyle = true,
}) => {
  return (
    <div className={`${useMenuStyle ? styles.menu : ""} right-0 py-24`}>
      <div className="flex flex-col items-center p-16">
        <p className="mb-16 font-medium">
          Escaneie com a câmera do seu celular:
        </p>
        <QRCode size={160} value={LINKS.APP_LINK} />
      </div>
      <hr className="my-8 bg-display-200" />
      <div className="flex flex-col items-center p-16">
        <p className="mb-8 font-medium">Ou acesse abaixo:</p>
        <div className="flex gap-8">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.stone.ton"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="v1/site-ton/icons/googleplay.svg"
              alt="Disponível no GooglePlay"
              width={152}
              height={44}
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/ton/id1496404455?l=pt&ls=1"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="v1/site-ton/icons/appstore.svg"
              alt="Disponível na App Store"
              width={152}
              height={44}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppMenu;
