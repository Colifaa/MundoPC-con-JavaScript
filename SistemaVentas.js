// Clase padre
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idRaton = ++Raton.contadorRatones;
    }
  
    toString() {
      return `Raton [ID: ${this._idRaton}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }
  

  class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;
  
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca);
      this._idTeclado = ++Teclado.contadorTeclado;
    }
  
    toString() {
      return `Teclado [ID: ${this._idTeclado}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
  }



// Clase Monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}], Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}

// Clase Computadora  
class Computadora {  
    static contadorComputadoras = 0;  

    constructor(nombre, monitor, teclado, raton) {  
        this._idComputadora = ++Computadora.contadorComputadoras;  
        this._nombre = nombre;  
        this._monitor = monitor; // falta pasar una instancia de Monitor  
        this._teclado = teclado; // y aca pasar una instancia de Teclado  
        this._raton = raton;     // y aca pasar una instancia de Raton  
    }  

    get idComputadora() {  
        return this._idComputadora;  
    }  

    toString() {  
        return `Computadora [ID: ${this._idComputadora}], Nombre: ${this._nombre}, Monitor: ${this._monitor.toString()}, Teclado: ${this._teclado.toString()}, Raton: ${this._raton.toString()}`;  
    }  
}  