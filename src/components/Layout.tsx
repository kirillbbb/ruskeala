import { Link, useLocation, useNavigate } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* HEADER */}
            <header className="header">
                <div className="header-left">
                    {location.pathname !== "/" && (
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            ←
                        </button>
                    )}

                    <Link to="/" className="logo">
                        Ruskeala
                    </Link>
                </div>

                <nav className="nav">
                    <Link className={isActive("/") ? "active" : ""} to="/">
                        Главная
                    </Link>
                    <Link className={isActive("/map") ? "active" : ""} to="/map">
                        Карта
                    </Link>
                </nav>
            </header>

            {/* CONTENT */}
            <main className="page">{children}</main>
        </>
    );
};