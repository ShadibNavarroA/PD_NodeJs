class Query {
    constructor(model) {
      this.model = model;
    }
    async execute(query) {
      try {
        const result = await this.model.find(query);
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
  
class UserQuery extends Query {
    constructor(model) {
      super(model);
    }
  
    async findByName(name) {
      try {
        const result = await this.execute({ name });
        return result;
      } catch (error) {
        throw error;
      }
    }
    async findByUsername(username) {
        try {
          const result = await this.execute({ username });
          return result;
        } catch (error) {
          throw error;
        }
    }
    async findByUsername(password) {
        try {
          const result = await this.execute({ password });
          return result;
        } catch (error) {
          throw error;
        }
    }
}

  
  
  class QueryFactory {
    static createQuery(model) {
      if (model.modelName === 'User') {
        return new UserQuery(model);
      } else {
        throw new Error('Model not supported');
      }
    }
  }
  
  module.exports = QueryFactory;
