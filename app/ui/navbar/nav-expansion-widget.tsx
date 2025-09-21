import clsx from "clsx";

export default function NavExpansionWidget({
  isNavExpanded,
  clickCallback,
}: {
  isNavExpanded: boolean;
  clickCallback: () => void;
}) {
  return (
    <div
      className="flex h-4 w-16 flex-col gap-8 overflow-hidden hover:cursor-pointer"
      onClick={() => clickCallback()}
    >
      <div
        className={clsx(
          "top-0 transform text-center font-sans font-semibold leading-4 tracking-wider text-purple-900 transition-all duration-150 hover:tracking-megaWide",
          isNavExpanded ? "-translate-y-4" : "translate-y-0",
        )}
      >
        MENU
        <br />
        BACK
      </div>
    </div>
  );
}
