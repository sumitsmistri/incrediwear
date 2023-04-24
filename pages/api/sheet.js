import { google } from 'googleapis';

async function handler(req, res) {
    
    const GOOGLE_CLIENT_EMAIL = "nextjs-sheetsave@nextjs-sheetsave.iam.gserviceaccount.com";
    const GOOGLE_CLIENT_ID = "101784781949492437721";
    const GOOGLE_SERVICE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJ9kK/irc5adbi\nrqBd6N3skEbVo4qkzidoZDl8Ix0Kmc3/PbAVRlG+57WJPnN78BgQtWUTFJ6oEPsN\nvABQoVrm/cHG7dYDDJ64uLsWgUbpBNRTNwcbWLBmB38zccs29r7aHRuJ0FHyJnR6\nYzPFul3U6azSM9WjAJIaJd/9u9mGWSfC3yhXWQhTX3OzQwZjxDc2KRSKyrCGeYIS\nZPaAPdbVGUZcRg2JZKwUd5tXkw38ScBmPsXO0a0UFT90bvTYKIMUY1JdZrxvFTfg\ne9pfGGN0ofAACGaobJPB0wlw4n7H4YxoR1cNrlRHNrm8fXZHi9smfuGfeyTulPka\nKRC+JQofAgMBAAECggEAQeBa22Gi7E5SsnQliRxJLz3MbSlAMwuvnQR8H7rQYUHU\nCLqVcgsS5QNtmovNXZLuNp0EkBm8urN3QH6fV62aGhiRmZLAqRP3vec711Zpy94w\nZ8heQBRIza8KVbx7fb00ea7e6bAS2rqiab1sCMYGj0l9fr87o0SvY2oRSxF4HbLo\njvO8J1hL8b+lBdvApwtc/+LuTP9T14hsKYh6Tf3TMiFIclqGhgyWAll/jNgtVhzj\no04iFTKKU0tTguD8cQyewVZRKqRvD5PzSi/SMRGzIl9ooCXngV/e9gdI2PmWv+gP\ncejm+kcUPontsgZmF9zQxYHORglPf9a9wXc5VHYlEQKBgQDwLJsIOO0GjGxVn9pn\nCMMfX0SiQ4AyZ9K5rBCmJeSCjC4uJbQ/cjL9TtkB3A8TXpKshzdwsvZJKitqltvI\nsqMA9hmttzK4eFhtIGjbihK+pdKJ0BYdYcZCZh0GX6nRHWwzQ1QVn82tdBKzU0wf\nh7kC9nyDBaax7QzUX2anw0PVGQKBgQDXRRGckTCIgDckF+0W1l0TiYgTxM9+jXIO\n8qaD/FDcPjsAButfBeZwpNYnr/KO9waP2eHFzmFOT9pZesh7xWrgi6ivw1IEg7mJ\nR1YEiKTImgomo4DoDj2Zoas5OrMC47QYdw/dyn7LL9pWSbhTPMPU4/IuadZMjQgI\n2R4VuuzH9wKBgQDtC2lcPSsbmn7WJ7acmNZUYWfRKwQdO8GMxdmM0rttacOugkIb\nmK/guPCP2Ez81gu3wqEiV0+jOL6vLgPwWvds3HjNrpGd5hGIa0Ny4xzLE8jvgfRB\nvZ27LSOahdKKdRq0odAco6ORfY1zdlQcjo048mRDwNEcrRVLink8PQn3CQKBgBaE\nQ/ZTfXcZqirdUdBMtcmgXhprQKTlGKQVn3M4xiBzZep3ztDOpi7sHvZhwgZQMmCD\nkskE8EqnsZggbq37lVVNZmSUEpUkThjc3FN3E31kF2G5QneDXdAfB/Dhge3wcVsJ\nwSAa2S5ZoAXciioyte0jtqZCLccuDUQXqbzuI2w7AoGBALjdA+b5KgyWSySC5DpF\nQEbWvZXy+2HccyBKZawaD/as8jwowSocL0/IcIzJcH3FJd6DrphWJtYKAP3wl/kG\nLCOnfBl2m2OKp5gvBkn0fCOpkn/sz96rTjbBZgHERvErIGOm2/bufRrfgZp4WSB7\neZxX7WhaLBpfSih1nwEL5O2/\n-----END PRIVATE KEY-----\n";

    if (req.method === 'POST') {
        const { name, email } = req.body;
        //console.log(name, email);

        const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: GOOGLE_CLIENT_EMAIL,
            client_id: GOOGLE_CLIENT_ID,
            private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
        ],
        });

        const sheets = google.sheets({
        auth,
        version: 'v4',
        });

        const response = await sheets.spreadsheets.values.append({
        spreadsheetId: "1ZAUIraxoL0WemHMr0stx65fLxvMd7kUDodc3dH5txtc",
        range: 'Sheet1!A2:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[name,email]],
        },
        });

        res.status(201).json({ message: 'It works!', response });
    }
    res.status(200).json({ message: 'Hey!' });
}

export default handler;