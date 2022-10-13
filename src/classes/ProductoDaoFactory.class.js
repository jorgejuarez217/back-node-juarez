const ProductoDaoMongo = require("../service/product.dao.mongo.js") ;
const CustomError = require ("./CustomError.class.js") ;

class ProductoDaoFactory {
  static getDao() {
    if (process.argv[2] === "mongo") return ProductoDaoMongo.getInstance();
    if (process.argv[2] === "undefined") throw new CustomError(500, "Falta implementar la db al inicializar")
  }
}

module.exports = ProductoDaoFactory;