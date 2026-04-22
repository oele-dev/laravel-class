import en from '/lang/en/messages.json';
import es from '/lang/es/messages.json';

const messages = { en, es };

export default function t(key, locale = 'en') {
    return messages[locale]?.[key] || key;
}
