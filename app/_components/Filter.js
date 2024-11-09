"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  function handleParams(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const selected = searchParams.get("capacity") ?? "all";

  return (
    <div className="flex px-5 py-2 border gap-10 text-sm border-primary-700 ">
      <button
        className={`${selected === "all" ? "text-amber-400" : ""} `}
        onClick={() => handleParams("all")}
      >
        All Cabin
      </button>
      <button
        className={`${selected === "small" ? "text-amber-400" : ""} `}
        onClick={() => handleParams("small")}
      >
        2-3 guests
      </button>
      <button
        className={`${selected === "medium" ? "text-amber-400" : ""} `}
        onClick={() => handleParams("medium")}
      >
        4-7 guests
      </button>
      <button
        className={`${selected === "large" ? "text-amber-400" : ""} `}
        onClick={() => handleParams("large")}
      >
        8-12 guests
      </button>
    </div>
  );
}
