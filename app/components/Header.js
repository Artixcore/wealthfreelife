export default function Header() {
    return (
      <header className="fixed-top">
        <div className="container-fluid mt-3">
          <div className="d-flex justify-content-between align-items-center p-2 px-3">
            <div className="crypt-logo">
              <a href="/">
                <img src="/images/logo.svg" alt="Logo" />
              </a>
            </div>
            <nav>
              <ul className="d-flex gap-4">
                <li><a href="/template-1">Template 1</a></li>
                <li><a href="/template-2">Template 2</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  