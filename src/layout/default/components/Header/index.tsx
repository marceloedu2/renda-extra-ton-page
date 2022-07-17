import { m, Variants } from "framer-motion";
import Image from "next/dist/client/image";
import React, { useCallback, useEffect, useState } from "react";
import Icon, { IconsNames } from "../../../../components/Icon";
import Link from "../../../../components/Link";
import { LINKS } from "../../../../constants/links";

import AttendanceMenu from "./components/AttendanceMenu";
import DownloadAppMenu from "./components/DownloadAppMenu";
import styles from "./Header.module.css";

type HeaderProps = {
  showCTAButton?: boolean;
  headerLinks?: HeaderLinkProps[];
  showAttendanceAndDownloadLinks?: boolean;
  hideMobileMenu?: boolean;
};

type HeaderLinkProps = {
  text: string;
  href?: string;
  iconName: IconsNames;
};

const defaultHeaderLinks: HeaderLinkProps[] = [
  {
    text: "Produtos",
    iconName: "pos-small",
  },
  {
    text: "Planos e Taxas",
    href: `${LINKS.SITE_TON}/planos-e-taxas/`,
    iconName: "round-dollar",
  },
];

const menuMobileVariants: Variants = {
  open: {
    translate: 0,
  },
  closed: {
    translateX: "100%",
  },
};

const menuMobileDrawerVariants: Variants = {
  open: {
    display: "flex",
    opacity: 1,
  },
  closed: {
    transition: {
      delay: 0.35,
    },
    opacity: 0,
    display: "none",
  },
};

const MenuDesktopWithSubMenu: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className={`${styles.menuContainer} relative`}>
    <div
      aria-label={title}
      className="px-16 my-auto font-medium text-display-900 paragraph-16"
    >
      {title}
    </div>
    {children}
  </div>
);

const OrderNowButton = ({ className }: { className?: string }) => (
  <Link
    aria-label="Pedir agora"
    className={`btn btn-primary btn-regular ${className}`}
    href={`${LINKS.SITE_TON}/checkout/cart/`}
  >
    <Icon name="shopping-cart" className="fill-current text-display-900" />
    <b className="ml-8">Pedir Agora</b>
  </Link>
);

const Header: React.FC<HeaderProps> = ({
  showCTAButton = true,
  headerLinks = defaultHeaderLinks,
  showAttendanceAndDownloadLinks = true,
  hideMobileMenu = false,
}) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(true);
  const [openContactMenu, setOpenContactMenu] = useState(true);

  const handleOpenMenuMobile = useCallback(() => {
    setOpenMenuMobile((value) => !value);
    setOpenContactMenu(false);
  }, []);

  const handleOpenContactMenu = useCallback(() => {
    setOpenContactMenu((value) => !value);
    setOpenMenuMobile(false);
  }, []);

  useEffect(() => {
    const el = document.getElementById("__next");

    if (el) {
      if (openMenuMobile) {
        el.style.overflow = "hidden";
      } else {
        el.removeAttribute("style");
      }
    }
  }, [openMenuMobile]);

  useEffect(() => {
    if (openContactMenu) {
      setOpenMenuMobile(false);
    }

    if (openMenuMobile) {
      setOpenContactMenu(false);
    }
  }, [openMenuMobile, openContactMenu]);

  return (
    <div
      id="header"
      className="sticky lg:relative top-0 z-50 px-16 md:px-40 h-[64px] md:h-[72px] bg-display-0 border-b border-display-400"
    >
      <div className="flex lg:hidden justify-between items-center h-full">
        <Link href={LINKS.SITE_TON} aria-label="ton" className="text-ton-500">
          <Icon name="logo-ton" className="fill-current text text-ton-500" />
        </Link>
        <div className="flex my-auto ml-auto">
          {showCTAButton && (
            <div
              className={`${!hideMobileMenu ? "hidden" : ""} sm:block mr-16`}
            >
              <OrderNowButton />
            </div>
          )}
          {!hideMobileMenu && (
            <div className={styles.menuMobileRightIcons}>
              <div
                onClick={handleOpenContactMenu}
                className={openContactMenu ? styles.active : ""}
              >
                <Icon name="customer-support" className="fill-current" />
              </div>
              <div
                onClick={handleOpenMenuMobile}
                className={`${styles.menuIcon} ${
                  openMenuMobile ? styles.active : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
        <m.div
          animate={openContactMenu ? "open" : "closed"}
          variants={menuMobileDrawerVariants}
          className={`${styles.customerMenuDrawer}`}
          initial="closed"
        >
          <m.div
            animate={openContactMenu ? "open" : "closed"}
            variants={menuMobileVariants}
            className={styles.menuMobile}
            transition={{ ease: "linear" }}
          >
            <div className="flex flex-col gap-12 items-center p-16 bg-display-0">
              <p className="font-bold">Quero ser cliente Ton</p>
              <div className="flex gap-12 w-full">
                <a
                  href={LINKS.NOT_CLIENT_PHONE}
                  className="px-0 w-1/2 btn btn-primary btn-large"
                >
                  <p className="flex">
                    <Icon name="phone" className="mr-8 fill-current" />
                    Telefone
                  </p>
                </a>
                <a
                  href={LINKS.NOT_CLIENT_WHATSAPP}
                  className="px-0 w-1/2 btn btn-primary btn-large"
                >
                  <p className="flex">
                    <Icon name="whatsapp" className="mr-8 fill-current" />
                    Whatsapp
                  </p>
                </a>
              </div>
            </div>
            <hr className="bg-display-200" />
            <div className="flex flex-col gap-12 items-center p-16 bg-display-0">
              <p className="font-bold">Já sou cliente Ton</p>
              <div className="flex gap-12 w-full">
                <a
                  href={LINKS.APP_LINK}
                  className="px-0 w-1/2 btn btn-secondary btn-large"
                >
                  <p className="flex">
                    <Icon name="smart-phone" className="mr-8 fill-current" />
                    Chat do App
                  </p>
                </a>
                <a
                  href={LINKS.CLIENT_WHATSAPP}
                  className="px-0 w-1/2 btn btn-secondary btn-large"
                >
                  <p className="flex">
                    <Icon name="whatsapp" className="mr-8 fill-current" />
                    Whatsapp
                  </p>
                </a>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
      <div className="hidden lg:flex justify-between lg:justify-center items-center mx-auto max-w-screen-xl h-full">
        <Link href={LINKS.SITE_TON} aria-label="ton" className="text-ton-500">
          <Icon name="logo-ton" className="fill-current text text-ton-500" />
        </Link>
        <div
          className="hidden md:flex flex-1 justify-start items-center self-stretch ml-24"
          data-testid="links-container"
        >
          {headerLinks.map((link) =>
            link.href ? (
              <Link
                href={link.href}
                key={`header-link-${link.text}`}
                aria-label={link.text}
                className="px-16 my-auto font-medium text-display-900 hover:text-ton-500 paragraph-16"
              >
                {link.text}
              </Link>
            ) : (
              <MenuDesktopWithSubMenu
                title="Produtos"
                key={`header-link-${link.text}`}
              >
                <div className={styles.menu}>
                  <Link
                    href={`${LINKS.SITE_TON}/tapton/`}
                    className="flex items-center"
                  >
                    <Image
                      src={`site-ton/tap-1`}
                      width={40}
                      height={60}
                      alt="Ton Tap 1"
                    />
                    <div className="ml-12">
                      <div className="flex">
                        <p className="font-medium">TapTon</p>
                      </div>
                      <p className="mt-2 paragraph-14">
                        Transforme seu celular em maquininha
                      </p>
                    </div>
                  </Link>
                  <hr className="my-8 bg-display-200" />
                  <Link
                    href={`${LINKS.SITE_TON}#maquininhas`}
                    className="flex items-center"
                  >
                    <Image
                      src={`site-ton/todas-2`}
                      width={40}
                      height={60}
                      alt="Maquininha Ton"
                    />
                    <div className="ml-12">
                      <p className="font-medium">Todas as maquininhas</p>
                      <p className="mt-2 paragraph-14">
                        Descubra a melhor maquininha pro seu negócio
                      </p>
                    </div>
                  </Link>
                </div>
              </MenuDesktopWithSubMenu>
            )
          )}
        </div>
        <div className="flex items-center ml-auto h-full">
          {showAttendanceAndDownloadLinks && (
            <>
              <MenuDesktopWithSubMenu title="Atendimento">
                <AttendanceMenu />
              </MenuDesktopWithSubMenu>
              <MenuDesktopWithSubMenu title="Baixe o App">
                <DownloadAppMenu />
              </MenuDesktopWithSubMenu>
            </>
          )}
          {showCTAButton && <OrderNowButton className="ml-16" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
