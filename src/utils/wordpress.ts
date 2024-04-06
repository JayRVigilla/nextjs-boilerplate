// use .env to generate WordPress API base url
export const WORDPRESS_PUBLIC_API_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites/${process.env.REACT_APP_WORDPRESS_URL}/sites/`


// Posts and Pages have content.rendered as strings of the HTML
// return this string as HTML

const stringToHTML = (str: string) => {
	var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};
