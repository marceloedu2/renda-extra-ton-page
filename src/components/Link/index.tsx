import LinkNext, { LinkProps } from "next/link";

interface ILink extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<ILink> = ({ children, className, ...props }) => {
  const linkFormatter = (link: string): string => {
    const session = link.split("#")[1];
    console.log(session);

    const newLink = /checkout/g.test(link.split("#")[0])
      ? `${link}/?productId=ULTRATON_S920&referrer=F2830F98-5FBB-4F0B-A3D6-698C5BF2C34C&utm_medium=invite_share&utm_source=revendedor`
      : /www.ton.com.br/g.test(String(link))
      ? `${link}/?referrer=F2830F98-5FBB-4F0B-A3D6-698C5BF2C34C&utm_medium=invite_share&utm_source=revendedor`
      : link;

    return `${newLink}#${newLink}`;
  };

  const href = linkFormatter(String(props.href));
  return (
    <LinkNext {...{ ...props, href }}>
      <a className={className}>{children}</a>
    </LinkNext>
  );
};

export default Link;
