export function getFormattedDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        console.warn("Geçersiz tarih objesi:", date);
        return ''; 
    }
    return date.toISOString().slice(0, 10);
}


export function getDateMinusDays(date, days) {
    if (!(date instanceof Date) || isNaN(date)) {
        console.warn("Geçersiz tarih objesi:", date);
        return null;
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

