import React from "react";
import classes from "./Chat_list.module.css";
import classNames from "classnames";
export default function Chat_list(props) {
    return (
        <div className={classes.chat_list}>
            <div className={classes.watching_now__container}>
                <h2 className={classes.watching_now__container_h2}>
                    655 смотрит сейчас
                </h2>
                <p className={classes.watching_now__container_p}>
                    Ultimate-пользователи: 6 ( 2<svg className={classes.watching_now__container_svg} height="14px" fill="#a3a3a3" viewBox="0 0 100 100"><path d="M49.9 67.8c-4.1-.07-4.66-2.48-18.51-2.36-13.94.13-19.4 4.26-19.4 4.26l.05 2.83s1.44.43 2.36 1.4c3.24 3.45 4.1 12.65 9.36 14.07s9.26 1.78 15.5-1.2a12.73 12.73 0 007.07-9.52c0-.05.05-2.42 3.24-2.48a2.59 2.59 0 00.34 0h.06c.1.01.19 0 .28 0 3.18.06 3.24 2.43 3.24 2.48.03.84 1.19 6.72 7.06 9.52 6.24 2.98 10.24 2.62 15.5 1.2 5.26-1.42 6.12-10.62 9.37-14.06.91-.98 2.36-1.4 2.36-1.4l.05-2.84s-5.46-4.13-19.4-4.26c-13.86-.12-14.41 2.29-18.52 2.35zM100 42.6c.18 8.24-19.27 13.66-49.99 13.76C19.3 56.46-.13 49.71 0 42.93c.13-6.79 20.78-10.36 20.78-10.36s7.06-20.1 10.42-22.09c3.37-1.99 10.82 2.8 17.8 2.98 6.97.18 15.97-5.48 19.07-2.24 3.1 3.24 10.79 21.9 10.79 21.9S99.8 34.37 100 42.6z"/></svg>)
                </p>
                <p className={classes.watching_now__container_p}>
                    Пользователи с токенами: <span className={classes.watching_now__container_span}>25</span>
                </p>
                <p className={classes.watching_now__container_p}>
                    Другие: <span className={classes.watching_now__container_span}>624</span>
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_bronze)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                        <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                        <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                        <text fill="#f6f6f6" className={classes.chat_list__item_txt} fontWeight="700" textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">3</text>
                    </svg>
                <p className={classes.chat_list__item_h2}>
                    Kiwiboynp
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_bronze)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} fontWeight="700" textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">3</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Kiwiboynp
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_bronze)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} fontWeight="700" textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">3</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Kiwiboynp
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_bronze)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} fontWeight="700" textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">3</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Kiwiboynp
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_grey)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">26</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    oliviersxm
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_silver)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">55</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    tuniasd
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_gold)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">88</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    Usmc_8152
                </p>
            </div>
            <div className={classNames(classes.chat_list__item, classes.color_league_royal)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={classes.chat_list__item_ava}>
                    <path filter="url(#badge-level-filter-glow)" fill="url(#badge-level-filter-royal)" d="M43.681 2.863a12.69 12.69 0 0112.638 0l15.865 9.108 15.803 8.988a12.693 12.693 0 016.418 11.058L94.367 50l.038 17.983a12.692 12.692 0 01-6.418 11.058l-15.803 8.988-15.865 9.108a12.69 12.69 0 01-12.638 0l-15.865-9.108-15.803-8.988a12.69 12.69 0 01-6.418-11.058L5.633 50l-.038-17.983a12.691 12.691 0 016.418-11.058l15.803-8.988 15.865-9.108z"/>
                    <path d="M43.9419 4.777a12.1761 12.1761 90 0112.1262 0l15.2225 8.7391l15.163 8.624a12.1789 12.1789 90 016.1581 10.6102L92.5751 50.005l0.0365 17.2547a12.178 12.178 90 01-6.1581 10.6102l-15.163 8.624l-15.2225 8.7391a12.1761 12.1761 90 01-12.1262 0l-15.2225-8.7391l-15.163-8.624a12.1761 12.1761 90 01-6.1581-10.6102L7.4349 50.005l-0.0365-17.2547a12.177 12.177 90 016.1581-10.6102l15.163-8.624l15.2225-8.7391z"/>
                    <text fill="#f6f6f6" className={classes.chat_list__item_txt} textAnchor="middle" fontSize="51" x="50%" y="50%" dy="20">99</text>
                </svg>
                <p className={classes.chat_list__item_h2}>
                    TZ73
                </p>
            </div>
        </div>
    );
}
