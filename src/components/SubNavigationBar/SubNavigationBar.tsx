import React from "react";
import subNavigation from "@/components/SubNavigationBar/subNavigationBar.module.scss";
import Link from "next/link";
import { IconType } from "react-icons";

export type Props = {
  serviceLink: string;
  serviceLabel: string;
  serviceIcon: IconType;
};

const SubNavigationBar: React.FC<{ items: Props[] }> = ({ items }) => {
  return (
    <div className={subNavigation.container}>
      <div className={subNavigation.links}>
        {items.map((item) => (
          <Link href={item.serviceLink} key={item.serviceLink}>
            <item.serviceIcon size={24} />
            {item.serviceLabel}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubNavigationBar;
