import { Check } from "lucide-react";

type BulletListProps = {
  items: string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-9 grid gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-4 rounded-full border border-white/80 bg-white/72 px-5 py-4 text-[16px] font-extrabold text-black/78 shadow-card backdrop-blur sm:text-[18px]"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-carosaGreen text-white">
            <Check size={22} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
