import { GlowingEffect } from "@/extend/interestHomeCard";

export default function Card({ children }: { children?: React.ReactNode }) {
return (
      <div className="relative h-full rounded-2xl border-2 border-[#00000029] p-2 md:rounded-3xl md:p-3 shadow-xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-2relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            {children}
        </div>
      </div>
  );
}