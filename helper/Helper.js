const Except = (string, limit = 0, except = '...') => {
    let content = string;
    content = content.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
    content = content.filter(v => v.length > 100);
    content = content[0].replace(/<[^>]+>/g, '');
    return content.substring(0, limit) + except;
}

export default Except

