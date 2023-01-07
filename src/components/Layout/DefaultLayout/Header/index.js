import styles from 'src/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/asset/image';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo}></img>
                <div className={cx('inputsearch')}>
                    <input type={'text'} placeholder={'Tim kiem tai khoan va video'}></input>
                    <button className={cx('upload')}></button>
                    <button className={cx('close')}></button>

                    <button className={cx('search')}></button>
                </div>
                <div className={cx('login')}>
                    <button className={cx('upload')}>Tai len</button>
                    <button className={cx('login')}>DanG nhap</button>
                    <button className={cx('option')}>...</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
