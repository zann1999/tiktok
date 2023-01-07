import styles from 'src/components/Layout/DefaultLayout/Sidebar/Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Sidebar() {
    return <div className={cx('wrapper')}>Sidebar</div>;
}

export default Sidebar;
