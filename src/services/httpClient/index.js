const BASE_URL = "https://pokeapi.co/api/v2";

export class Http {
  async get(path) {
    const response = await fetch(BASE_URL + path);
    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  }
}

export default class HttpClient {
  constructor(instance) {
    if (!instance) throw Error("Please pass a instance");
    this._instance = instance;
  }

  async get(path) {
    return await this._instance.get(path);
  }
}
