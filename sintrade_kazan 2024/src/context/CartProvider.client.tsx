"use client"
import React, { createContext, useReducer, useEffect, ReactNode, FC} from 'react';
import {Product} from "@/src/app/types/landingTypes";

// Определите типы для элементов корзины и состояния корзины

type CartState = {
    items: Product[];
    count: number;
    activeTab: string;

};

type CartAction =
    | { type: 'ADD_TO_CART'; item: Product }
    | { type: 'REMOVE_FROM_CART'; name: string; weights_key: string } // новый тип действи
    | { type: 'CLEAR_CART' }
    | { type: 'INCREMENT_ITEM_WEIGHT'; index: number; weight: string }
    | { type: 'DECREMENT_ITEM_WEIGHT'; index: number; weight: string }
    | { type: 'LOAD_SAVED_CART'; payload: CartState }
    | { type: 'SET_ACTIVE_TAB'; tab: string };


// Реализация редьюсера корзины
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            // Установка активной вкладки
            return {
                ...state,
                activeTab: action.tab
            }
        case 'ADD_TO_CART':
            // Проверяем, существует ли уже товар с таким же именем в корзине
            const existingItemIndex = state.items.findIndex(item => item.name === action.item.name);

            if (existingItemIndex >= 0) {
                // Если товар с таким же именем уже есть, обновляем его веса и общее количество
                const existingItem = state.items[existingItemIndex];
                const updatedWeights = { ...existingItem.weights };

                for (const weight in action.item.weights) {
                    updatedWeights[weight] = (updatedWeights[weight] || 0) + action.item.weights[weight];
                }

                const updatedItem = {
                    ...existingItem,
                    weights: updatedWeights,
                    common_amount: (existingItem.common_amount ?? 0) + (action.item.common_amount ?? 0)
                };

                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;

                return {
                    ...state,
                    items: updatedItems,
                    count: state.count + (action.item.common_amount ?? 0)
                };
            } else {
                // Если такого товара нет, добавляем его как новый элемент
                return {
                    ...state,
                    items: [...state.items, action.item],
                    count: state.count + (action.item.common_amount ?? 0)
                };
            }


        case 'REMOVE_FROM_CART':
            const updatedItems = state.items.map(item => {
                if (item.name === action.name) {
                    const reducedAmount = item.weights && item.weights[action.weights_key] ? item.weights[action.weights_key] : 0;
                    return {
                        ...item,
                        weights: {
                            ...item.weights,
                            [action.weights_key]: 0
                        },
                        common_amount: (item.common_amount ?? 0) - reducedAmount
                    };
                }
                return item;
            }).filter(item =>  (item.common_amount ?? 0) > 0);

            const reducedCount = updatedItems.reduce((acc, item) => acc +  (item.common_amount ?? 0), 0);

            return {
                ...state,
                items: updatedItems,
                count: reducedCount
            };
        case 'CLEAR_CART':
            return { ...state, items: [], count: 0 };

        case 'INCREMENT_ITEM_WEIGHT':
            let incrementedItems = state.items.map((item, index) =>
                index === action.index ? {
                    ...item,
                    weights: {
                        ...item.weights,
                        [action.weight]: (item.weights?.[action.weight] ?? 0) + 1
                    },
                    common_amount: (item.common_amount ?? 0) + 1 // Увеличиваем общее количество
                } : item
            );
            let incrementedCount = incrementedItems.reduce((total, item) => total + (item.common_amount ?? 0), 0);
            return {
                ...state,
                items: incrementedItems,
                count: incrementedCount
            };

        case 'DECREMENT_ITEM_WEIGHT':
            let decrementedItems = state.items.map((item, index) =>
                index === action.index ? {
                    ...item,
                    weights: {
                        ...item.weights,
                        [action.weight]: Math.max(0, (item.weights?.[action.weight] ?? 0) - 1)
                    },
                    common_amount: (item.common_amount ?? 1) - 1
                } : item
            ).filter(item => (item.common_amount ?? 1) > 0);

            let decrementedCount = decrementedItems.reduce((total, item) => total + (item.common_amount ?? 1), 0);

            return {
                ...state,
                items: decrementedItems,
                count: decrementedCount
            };
        case 'LOAD_SAVED_CART':
            // Загрузка сохраненного состояния корзины
            return { ...action.payload };

        default:
            return state;
    }
};

// Определение начального состояния корзины
const initialCartState: CartState = {
    items: [
    ],
    count: 0,
    activeTab: 'products'
};

type CartContextProps = {
    cartState: CartState;
    addToCart: (item: Product) => void;
    removeFromCart: (itemId: { name: string; wight: string }) => void;
    clearCart: () => void;
    incrementWeight: (itemIndex: number, weight: string) => void;
    decrementWeight: (itemIndex: number, weight: string) => void;
    setActiveTab: (tab: string) => void;
};

// Создайте контекст
const CartContext = createContext<CartContextProps>({
    cartState: initialCartState,
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    incrementWeight: () => {},
    decrementWeight: () => {},
    setActiveTab: () => {} // Добавьте это свойство
});

// Компонент провайдера
interface CartProviderClientProps {
    children: ReactNode;
}
interface CartItem {
    name: string;
    wight: string;
}
const CartProviderClient: FC<CartProviderClientProps> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    // Функция для добавления элемента в корзину
    const addToCart = (item: Product) => {
        dispatch({ type: 'ADD_TO_CART', item });
    };

    // Функция для удаления элемента из корзины
    const removeFromCart = (item: CartItem) => {
        dispatch({ type: 'REMOVE_FROM_CART', name: item.name, weights_key: item.wight});
    };

    const setActiveTab = (tab: string) => {
        dispatch({ type: 'SET_ACTIVE_TAB', tab });
    };
    // Функция для очистки корзины
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
    // Функция для увеличения веса элемента в корзине
    const incrementWeight = (itemIndex: number, weight: string) => {
        dispatch({ type: 'INCREMENT_ITEM_WEIGHT', index: itemIndex, weight });
    };

    // Функция для уменьшения веса элемента в корзине
    const decrementWeight = (itemIndex: number, weight: string) => {
        dispatch({ type: 'DECREMENT_ITEM_WEIGHT', index: itemIndex, weight });
    };

    // Эффект для инициализации состояния из localStorage при монтировании компонента
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                dispatch({ type: 'LOAD_SAVED_CART', payload: JSON.parse(savedCart) });
            }
        }
    }, []);

    // Эффект для сохранения состояния в localStorage при каждом обновлении cartState
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('cart', JSON.stringify(cartState));
        }
    }, [cartState]);

    return (
        <CartContext.Provider value={{
            cartState,
            addToCart,
            removeFromCart,
            clearCart,
            incrementWeight,
            decrementWeight,
            setActiveTab
        }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProviderClient, CartContext };


