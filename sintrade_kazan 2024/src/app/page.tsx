"use client"
import React, { useEffect, useContext } from 'react';
import "./main.scss";
import { Landing_hero } from "@/src/components/landing_hero";
import { Landing_products } from "@/src/components/landing_products";
import { Contacts } from "@/src/components/landing_contacts";
import { Services } from "@/src/components/landing_services_section";
import Both_Component from "@/src/components/both_component/both_products";
import { CartContext } from "@/src/context/CartProvider.client";


export default function Home() {
    useEffect(() => {
        const smoothScroll = (e: MouseEvent) => {
            e.preventDefault();
            const target = e.target as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href) {
                const element = document.getElementById(href.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Плавная прокрутка для всех якорей
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll as EventListener);
        });

        // Очистка обработчиков событий
        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smoothScroll as EventListener);
            });
        };
    }, []);

    return (
        <>
            <div className="customBlur"></div>
            <main>
                <div className="landing">
                    <Landing_hero />
                    <Both_Component />
                    <TabContent />
                    <Contacts />
                </div>
            </main>
        </>
    );
}

const TabContent: React.FC = () => {
    const { cartState } = useContext(CartContext);

    return (
        <>
            {cartState.activeTab === 'products' && <Services />}
            {cartState.activeTab === 'services' && <Landing_products />}
        </>
    );
}
