
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout-container">
            {/* Sidebar */}
            {/* <aside className="sidebar">
                <div className="sidebar-title">🧠 TrendOps</div>
            </aside> */}

            {/* Main content */}
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}