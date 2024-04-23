import clsx from "clsx";
import { lazy as _lazy, HTMLAttributes, Suspense, useMemo } from "react";

function lazy(importFn: Function) {
  return _lazy(async () => {
    const icon = await importFn();
    if (icon?.ReactComponent) {
      return { default: icon.ReactComponent };
    }

    return icon;
  });
}

const icons = {
  "sidebar-left": lazy(async () => import("/public/icon/sidebar-left.svg")),
  copy: lazy(async () => import("/public/icon/copy.svg")),
  table: lazy(async () => import("/public/icon/table.svg")),
  plus: lazy(async () => import("/public/icon/plus.svg")),
} as const;

export type IconProps = HTMLAttributes<HTMLDivElement> & {
  icon: keyof typeof icons;
  className?: string;
};

export function Icon({ icon, className }: IconProps) {
  const Svg = useMemo(() => icons[icon], [icon]);

  if (!Svg) return null;

  return (
    <Suspense fallback={null}>
      <Svg
        className={clsx(
          "w-6 h-6",
          "fill-gray-600 dark:fill-white object-contain",
          className
        )}
      />
    </Suspense>
  );
}
