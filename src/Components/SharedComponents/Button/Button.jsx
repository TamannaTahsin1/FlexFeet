import cn from "../../../lib/cn";

const Button = ({ className, type, children }) => {
  return (
    <button
      type={type}
      className={cn(
        "border-primary bg-primary hover:border-primary hover:text-primary group flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-md  border px-6  py-2 text-xs font-semibold text-[#252525] duration-200 hover:border hover:bg-transparent md:text-base ",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
