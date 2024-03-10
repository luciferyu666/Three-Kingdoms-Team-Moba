// models/bookModel.js
import apiService from '../services/apiService';

export default class BookModel {
  constructor({ id, name, effect }) {
    this.id = id;
    this.name = name;
    this.effect = effect;
  }

  // 获取所有兵书的静态方法
  static async fetchAll() {
    try {
      const response = await apiService.fetchBooks();
      return response.data.map(bookData => new BookModel(bookData));
    } catch (error) {
      console.error('获取兵书数据失败:', error);
      throw error;
    }
  }

  // 其他可能的模型方法...
}
