import styles from 'src/components/Layout/DefaultLayout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import Popper from '../../components/popper';
import SearchResultAccount from '../../components/searchResultAccount';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function SearchAccount() {
    const refinput = useRef();

    const [searchResult, setsearchResult] = useState(false);
    const [value, setValue] = useState('');
    const inputHandle = () => {
        setValue(refinput.current.value);
        setsearchResult(true);
    };
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }, [value]);
    return (
        <Tippy
            interactive={true}
            visible={searchResult}
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
            onClickOutside={() => setsearchResult(false)}
        >
            <div className={cx('inputsearch')}>
                <input
                    type={'text'}
                    placeholder={'Tim kiem tai khoan va video'}
                    onChange={inputHandle}
                    ref={refinput}
                    onFocus={() => setsearchResult(true)}
                ></input>
                <button className={cx('load')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
                {value ? (
                    <button
                        className={cx('close')}
                        onClick={() => {
                            refinput.current.value = '';
                            setValue('');
                            refinput.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                ) : (
                    <></>
                )}

                <button className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default SearchAccount;
