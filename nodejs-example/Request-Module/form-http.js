/*
 * Whether you're interfacing with a REST API or creating a bot to crawl and submit data on websites, at some point you'll need to submit data for a form. As always with request, this is can be done a few different ways, depending on your needs.``
 *
 *
 */

let options = {
    url: 'http://http://mockbin.com/request',
    form: {
            email: 'me@example.com',
            password: 'myPassword'
        }
};

request.post(options, callback);

