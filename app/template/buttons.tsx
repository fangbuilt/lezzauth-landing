export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button className="w-fit h-8 text-xs bg-lezzindigo rounded-full px-4 py-2 font-medium hover:bg-lezzchia transition-all ease-out duration-300 delay-150">
        {children}
      </button>
    </>
  );
}
export function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button className="w-fit h-8 text-xs rounded-full px-4 py-2 hover:bg-ghosthover transition-all ease-out duration-300 delay-150">
        {children}
      </button>
    </>
  );
}
export function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button className="w-fit text-sm bg-lezzindigo rounded-full px-6 py-4 font-medium hover:bg-lezzchia transition-all ease-out duration-300 delay-150">
        {children}
      </button>
    </>
  );
}
