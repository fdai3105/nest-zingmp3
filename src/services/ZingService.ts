// let request = require("request-promise");
import { FileCookieStore } from 'tough-cookie-file-store';
import * as fs from 'fs';
import { createHash, createHmac } from 'crypto';
import request = require('request-promise');

const URL_API = 'https://zingmp3.vn';
const API_KEY = 'kI44ARvPwaqL7v0KuDSM0rGORtdY1nnw';
const SECRET_KEY = '882QcNXV4tUZbvAsjmFOHqNC1LpcBRKW';
const cookiePath = 'ZingMp3.json';
const time = Math.floor(Date.now() / 1000);

if (!fs.existsSync(cookiePath)) fs.closeSync(fs.openSync(cookiePath, 'w'));
const cookiejar = request.jar(new FileCookieStore(cookiePath));

export class ZingService {
  static async getTodayPlaylist() {
    const a = await this.getHome(1);
    return a['items'][2];
  }

  static getSectionPlaylist(id) {
    return this.requestZing({
      path: '/api/v2/playlist/getSectionBottom',
      qs: {
        id,
      },
    });
  }

  static getDetailPlaylist(id) {
    return this.requestZing({
      path: '/api/v2/playlist/getDetail',
      qs: {
        id,
      },
    });
  }

  static getInfoMusic(id) {
    return this.requestZing({
      path: '/api/v2/song/getInfo',
      qs: {
        id,
      },
    });
  }

  static getStreaming(id) {
    return this.requestZing({
      path: '/api/v2/song/getStreaming',
      qs: {
        id,
      },
    });
  }

  static getHome(page = 1) {
    return this.requestZing({
      path: '/api/v2/home',
      qs: {
        page,
      },
    });
  }

  static async getCookie() {
    if (!cookiejar.getCookies('zingmp3.vn')) await request.get(URL_API);
  }

  static requestZing({ path, qs }) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.getCookie();
        const param = new URLSearchParams(qs).toString();
        const sig = this.hashParam(path, param);
        const data = await request({
          url: URL_API + path,
          qs: {
            apiKey: API_KEY,
            ctime: time,
            sig,
            ...qs,
          },
          gzip: true,
          json: true,
          jar: cookiejar,
        });
        resolve(data.data);
      } catch (error) {
        reject(error);
      }
    });
  }

  static hashParam(path, param = '') {
    const hash256 = this.getHash256(`ctime=${time}${param}`);
    return this.getHmac512(path + hash256, SECRET_KEY);
  }
  static getHash256 = (a) => {
    return createHash('sha256').update(a).digest('hex');
  };
  static getHmac512 = (str, key) => {
    const hmac = createHmac('sha512', key);
    return hmac.update(Buffer.from(str, 'utf8')).digest('hex');
  };
}
