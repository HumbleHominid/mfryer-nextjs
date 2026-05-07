import clsx from "clsx";

export default function NavExpansionWidget({
  isNavExpanded,
  clickCallback,
}: {
  isNavExpanded: boolean;
  clickCallback: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isNavExpanded}
      className="cursor-pointer border-0 bg-transparent px-2 py-3"
      onClick={() => clickCallback()}
    >
      <div className="h-4 w-16 overflow-hidden">
        <div
          className={clsx(
            "transform text-center font-sans font-semibold leading-4 tracking-wider text-purple-900 transition-all duration-150 hover:tracking-megaWide",
            isNavExpanded ? "-translate-y-4" : "translate-y-0",
          )}
        >
          MENU
          <br />
          BACK
        </div>
      </div>
    </button>
  );
}
