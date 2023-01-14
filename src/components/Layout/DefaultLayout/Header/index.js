import styles from 'src/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/asset/image';
import Tippy from '@tippyjs/react/headless';
import Popper from '../../components/popper';
import SearchResultAccount from '../../components/searchResultAccount';
import {
    faCircle,
    faCircleXmark,
    faClose,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2]);
        }, 2000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo}></img>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('box-searchResult')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <div>
                                    <h4 className={cx('account')}>Tài khoản</h4>
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                    <SearchResultAccount />
                                </div>
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('inputsearch')}>
                        <input type={'text'} placeholder={'Tim kiem tai khoan va video'}></input>
                        <button className={cx('load')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('login')}>
                    <button className={cx('upload')}>+ Tai len</button>
                    <button className={cx('loginn')}>Dang nhap</button>
                    <button className={cx('option')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
