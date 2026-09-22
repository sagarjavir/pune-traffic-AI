"use client";

import dynamic from "next/dynamic";
import type { CityMapInnerProps } from "./CityMapInner";

const CityMapInner = dynamic(() => import("./CityMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
      Loading Pune map…
    </div>
  ),
});

export default function CityMap(props: CityMapInnerProps) {
  return <CityMapInner {...props} />;
}
