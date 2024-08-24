export function getFormattedDate(date) {
    // `date` objesinin geçerli olup olmadığını kontrol edin
    if (!(date instanceof Date) || isNaN(date)) {
        console.warn("Geçersiz tarih objesi:", date);
        return ''; // Geçersiz tarih için boş string veya başka bir varsayılan değer döndürebilirsiniz
    }

    // Geçerli bir tarih objesi için formatlama yapın
    return date.toISOString().slice(0, 10);
}


export function getDateMinusDays(date, days) {
    // `date` objesinin geçerli olup olmadığını kontrol edin
    if (!(date instanceof Date) || isNaN(date)) {
        console.warn("Geçersiz tarih objesi:", date);
        return null; // Geçersiz tarih için `null` veya başka bir varsayılan değer dönebilirsiniz
    }

    // Geçerli bir tarih objesi ile günleri azaltın
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

