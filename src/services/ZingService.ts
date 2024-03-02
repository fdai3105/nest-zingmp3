import { FileCookieStore } from 'tough-cookie-file-store';
import * as fs from 'fs';
import { createHash, createHmac } from 'crypto';
import request = require('request-promise');
import { Injectable } from '@nestjs/common';
import { response } from 'src/utils/Ultis';

const URL_API = 'https://zingmp3.vn';
const API_KEY = 'kI44ARvPwaqL7v0KuDSM0rGORtdY1nnw';
const SECRET_KEY = '882QcNXV4tUZbvAsjmFOHqNC1LpcBRKW';
const cookiePath = 'ZingMp3.json';
const apiVersion = '1.9.110';
const time = Math.floor(Date.now() / 1000);

if (!fs.existsSync(cookiePath)) fs.closeSync(fs.openSync(cookiePath, 'w'));
const cookiejar = request.jar(new FileCookieStore(cookiePath));

@Injectable()
export class ZingService {
  /// qs2: trường này sẽ không decode vào sig
  async request({ path, qs = {}, qs2 = {} }) {
    return new Promise(async (resolve, reject) => {
      try {
        await ZingService.getCookie();
        const param = new URLSearchParams(qs).toString().split('&').join('');
        const sig = this.hashParam(path, param);
        const data = await request({
          url: URL_API + path,
          qs: {
            ...qs,
            ...qs2,
            version: apiVersion,
            apiKey: API_KEY,
            ctime: time,
            sig,
          },
          gzip: true,
          json: true,
          jar: cookiejar,
        });
        resolve(response(data['err'], data['msg'], data['data']));
      } catch (error) {
        resolve(response(error['err'], error['msg'], error['data']));
        reject(error);
      }
    });
  }

  private static async getCookie() {
    if (!cookiejar.getCookies('zingmp3.vn')) await request.get(URL_API);
  }

  private hashParam(path, param = '') {
    const hash256 = this.getHash256(`ctime=${time}${param}`);
    return this.getHmac512(path + hash256, SECRET_KEY);
  }

  private getHash256 = (a) => {
    return createHash('sha256').update(a).digest('hex');
  };

  private getHmac512 = (str, key) => {
    const hmac = createHmac('sha512', key);
    return hmac.update(Buffer.from(str, 'utf8')).digest('hex');
  };
}
