import type { TechItem } from "@/data/tech";
import { Package } from "lucide-react";
import Image from "next/image";

type TechIconProps = {
  item: TechItem;
  className?: string;
};

const TechIcon = ({ item, className }: TechIconProps) => {
  if (!item.icon && !item.darkIcon) {
    return <Package strokeWidth={1.5} className={`block ${className || ""}`} />;
  }

  return (
    <span className="relative inline-flex shrink-0 cursor-default">
      {item.icon && (
        <Image
          src={item.icon}
          alt={item.name}
          className={`block ${className || ""} ${item.darkIcon ? "dark:hidden" : ""}`}
          width={24}
          height={24}
        />
      )}
      {item.darkIcon && (
        <Image
          src={item.darkIcon}
          alt={item.name}
          className={`hidden dark:block ${className || ""}`}
          width={24}
          height={24}
        />
      )}
    </span>
  );
};

export default TechIcon;
