import { createContext, useContext, useState } from 'react';

const LocaleContext = createContext();

export function LocaleProvider({ initialLocale, children }) {
    const [locale, setLocale] = useState(initialLocale || 'en');
    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}
