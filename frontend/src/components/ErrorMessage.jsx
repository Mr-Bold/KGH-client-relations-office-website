export default function ErrorMessage({ children }) { return children ? <div className="error-banner" role="alert">{children}</div> : null; }
