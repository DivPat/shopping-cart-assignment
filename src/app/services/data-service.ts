import { environment } from '../../environments/environment'

export class DataService {

  private static url = environment.apiUrl;

  constructor() { }

  static async getRequest(endpoint: string) {
    const response = await fetch(`${this.url}${endpoint}`);
    const data = await response.json();
    return data;
  }

  static async postRequest(endpoint:any, data: any) {
    const response = await fetch(`${this.url}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data)

    });
    const jsonData = await response.json()
    return jsonData;
  }

}
