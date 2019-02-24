export const getId = (string) => {
    const array = string.split('/');
    return array[array.length - 1];
};

export const convertToSlug = string => {
    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export const convertToTitle = (slug) => {
    const words = slug.split('-');

    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
};

export const convertToExcerpt = (string, limit = 0, except = '...') => {
    string = string.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/)
    string.filter(v => v.length > 100)
    string = string.filter(v => v.length > 100)
    string = string[0].replace(/<[^>]+>/g, '')
    return string.substring(0, limit) + except
}

