import * as CryptoJS from 'crypto-js';

export function generateRandomString(length: number) :string {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function generateCodeChallenge(code_verifier :string) :string {
  return this.base64URL(CryptoJS.SHA256(code_verifier))
}

export function base64URL(val:any) {
  return val.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}
