import en_US from './dictionaries/en_US';

const I18n = { en_US };

const t = (key, ...more) => en_US(key, ...more);

export { t };
export default I18n;
