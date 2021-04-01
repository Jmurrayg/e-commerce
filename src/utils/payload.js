/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-anonymous-default-export */
export default function() {
    const token = window.localStorage.getItem('token');
    if( token ) {
        // eslint-disable-next-line no-unused-vars
        const [header, payload, signature] = token.split('.');
        const base64 = payload.replace('-','+').replace('_', '/');
        const payloadObject = JSON.parse(window.atob(base64));
        console.log(payloadObject);
        return payloadObject;
    } else {
        null
    }
}