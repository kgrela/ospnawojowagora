import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type NavbarItemProps = {
  children: ReactNode;
  href?: string;
  externalLink?: boolean;
  className?: string;
  onClick?: () => void;
  title?: string;
};

const NavbarItem = (props: NavbarItemProps) => {
  const className = classNames('p-2 rounded-md lg:hover:bg-neutral-200', props.className);

  const commonProps = {
    className,
    onClick: props.onClick,
    title: props.title,
  };

  if (!props.href) {
    return <button {...commonProps}>{props.children}</button>;
  }

  if (props.externalLink) {
    return (
      <a href={props.href} {...commonProps}>
        {props.children}
      </a>
    );
  }

  return (
    <Link href={props.href} {...commonProps}>
      {props.children}
    </Link>
  );
};

export default forwardRef(NavbarItem);
