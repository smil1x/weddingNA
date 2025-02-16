import { People } from "../constants/constatnts.js";


export const getGuest = (id) => {
    if (!id) return {};

    return People.find(people => people.id === id) || {};
}

export const getOS = () => {
    const userAgent = navigator.userAgent;
    if (/Windows/i.test(userAgent)) return "Windows";
    if (/Macintosh|Mac OS/i.test(userAgent)) return "macOS";
    if (/Linux/i.test(userAgent)) return "Linux";
    if (/iPhone|iPad|iOS/i.test(userAgent)) return "iOS";
    if (/Android/i.test(userAgent)) return "Android";
    return "Неизвестная ОС";
};

export const getBrowser = () => {
    const userAgent = navigator.userAgent;
    if (/Chrome/i.test(userAgent) && !/Edg/i.test(userAgent)) return "Google Chrome";
    if (/Edg/i.test(userAgent)) return "Microsoft Edge";
    if (/Firefox/i.test(userAgent)) return "Mozilla Firefox";
    if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) return "Safari";
    if (/Opera|OPR/i.test(userAgent)) return "Opera";
    return "Неизвестный браузер";
};