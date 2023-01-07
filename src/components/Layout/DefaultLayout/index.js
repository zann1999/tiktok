import Header from './Header';
import Sidebar from './Sidebar';
import 'src/components/Layout/DefaultLayout/Page.scss';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
