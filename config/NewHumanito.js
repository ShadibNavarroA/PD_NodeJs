class humanito {
  vidaBase = 75;

  vida() {
    return this.vidaBase;
  }
}

class humanitoDecorado extends humanito {
  constructor(humanito) {
    super();
    this.humanito = humanito;
  }

  vida() {
    return this.humanito.vida();
  }
}

class HumanitoArmo extends humanitoDecorado {
  constructor(humanito) {
    super(humanito);
  }

  vida() {
    return this.humanito.vida() + 100;
  }
}

class HumanitoMoney extends humanitoDecorado {
  constructor(humanito) {
    super(humanito);
    this.money = 50;
  }

  vida() {
    return this.humanito.vida();
  }

  Money() {
    return this.money;
  }
}

class HumanitoMago extends humanitoDecorado {
  constructor(humanito) {
    super(humanito);
    this.magia = 100;
  }

  vida() {
    return this.humanito.vida() + 100;
  }

  Magia() {
    return this.magia;
  }
}

function CreaHumanito() {
  let Humanito = new humanito();
  console.log("Humanito Normal -> vida:", Humanito.vida());

  Humanito = new HumanitoMoney(Humanito);
  console.log("Humanito adinerado -> money:", Humanito.Money());

  Humanito = new HumanitoMago(Humanito);
  console.log("-> Puntos de vida:", Humanito.vida());
  console.log("-> Puntos de magia:", Humanito.Magia());

  console.log(Humanito)
}

CreaHumanito();

module.exports = CreaHumanito;

