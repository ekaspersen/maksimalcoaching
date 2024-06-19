export const ButtonPrimaryDark = ({ children }) => {
    return (
        <button className="button shadow-lg bg-clr_primary_dark">
            {children}
        </button>
    );
};
export const ButtonPrimary = ({ children }) => {
    return (
        <button className="button shadow-lg bg-clr_primary">{children}</button>
    );
};
export const ButtonSecondary = ({ children }) => {
    return (
        <button className="button shadow-lg bg-clr_black">{children}</button>
    );
};
export const ButtonGhost = ({ children }) => {
    return (
        <button className="button bg-transparent border-4 border-clr_white">
            {children}
        </button>
    );
};
