export default function Floating({ children, className = "" }) {
    return <div className={`animate-floating ${className}`}>{children}</div>;
}
