import cn from "../../../lib/cn";

const Container = ({ children, className }) => {
    return (
        <div

            className={cn(
                "mx-auto  max-w-[1400px] px-2 md:px-6 lg:px-12",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;