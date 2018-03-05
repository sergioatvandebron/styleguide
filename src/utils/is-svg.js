const htmlCommentRegex = require('html-comment-regex');

const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;

export default input => regex.test(input.toString().replace(htmlCommentRegex, ''));
