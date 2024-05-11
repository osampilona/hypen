import React from "react";
import subNavigation from "@/components/SubNavigationBar/subNavigationBar.module.scss";
import Link from "next/link";
import { IconType } from "react-icons";

export type serviceProps = {
  serviceLink: string;
  serviceLabel: string;
  serviceIcon: IconType;
};

const SubNavigationBar: React.FC<{ items: serviceProps[] }> = ({ items }) => {
  return (
    <div className={subNavigation.container} data-testid="subnavigation-bar">
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
