export function BlueDecor() {
  return (
    <>
      <span className="absolute left-[5%] top-[24%] h-20 w-20 rounded-[26px] bg-carosaBlue/10" />
      <span className="absolute left-[15%] top-[32%] h-7 w-32 -rotate-12 rounded-full bg-carosaBlue" />
      <span className="absolute bottom-[15%] left-[8%] h-14 w-14 rotate-45 rounded-[18px] bg-carosaGreen/70" />
    </>
  );
}

export function BackgroundWash() {
  return (
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_22%,rgba(139,197,63,0.15),transparent_28%),radial-gradient(circle_at_78%_34%,rgba(30,69,150,0.14),transparent_32%),linear-gradient(180deg,#fbfbfb_0%,#f1f3f5_100%)]" />
  );
}
