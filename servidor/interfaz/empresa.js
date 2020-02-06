const empresaJSON = require("../empresas.json").Empresa;

class Empresa {
  send() {
    return empresaJSON;
  }
}


module.exports = Empresa;