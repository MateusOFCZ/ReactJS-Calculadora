import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var Operador = '';
var Conta1 = 'N/A';
var Conta2 = 'N/A';
var Resultado = 'N/A';

var Conta = [];

class Calculadora extends React.Component {
  render() {
    return (
      <div>
        <div class="Head">
          <p class="Titulo">CALCULADORA</p>
        </div>
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div class="Fundo">
              <input id="Display" class="Display" type="text" disabled></input>
              <div class="row">
                <div class="col-sm-8">
                  <div class="row">
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('7')}>7</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('8')}>8</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('9')}>9</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('4')}>4</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('5')}>5</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('6')}>6</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('1')}>1</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('2')}>2</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('3')}>3</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('0')}>0</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('.')}>.</button>
                    </div>
                    <div class="col-sm-4">
                      <button class="Numeros" onClick={this.Salvar_Display('=')}>=</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="Display_Margin"></div>
                  <button class="Operadores" onClick={this.Limpar}>C</button>
                  <button class="Operadores" onClick={this.Salvar_Display('/')}>/</button>
                  <button class="Operadores" onClick={this.Salvar_Display('x')}>X</button>
                  <button class="Operadores" onClick={this.Salvar_Display('-')}>-</button>
                  <button class="Operadores" onClick={this.Salvar_Display('+')}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
    );
  }

  Salvar_Display(Tecla) {
    return function (e) {
      if (Operador === '' && (Tecla !== '=' || Tecla !== '/' || Tecla !== 'x' || Tecla !== '-' || Tecla !== '+') && (Tecla === '1' || Tecla === '2' || Tecla === '3' || Tecla === '4' || Tecla === '5' || Tecla === '6' || Tecla === '7' || Tecla === '8' || Tecla === '9' || Tecla === '0' || Tecla === '.')) {
        if (Conta1 === 'N/A') {
          Conta1 = Tecla;
        } else {
          Conta1 += Tecla;
        }
        document.getElementById("Display").value = `${Conta1}`;
      }

      if (Operador === '' && Resultado === 'N/A' && (Tecla === '/' || Tecla === 'x' || Tecla === '-' || Tecla === '+') && (Tecla !== '=' || Tecla !== '1' || Tecla !== '2' || Tecla !== '3' || Tecla !== '4' || Tecla !== '5' || Tecla !== '6' || Tecla !== '7' || Tecla !== '8' || Tecla !== '9' || Tecla !== '0' || Tecla !== '.')) {
        Operador = Tecla;
        document.getElementById("Display").value = `${Conta1}${Tecla}`;
      }

      if (Operador !== '' && Resultado === 'N/A' && (Tecla !== '=' || Tecla !== '/' || Tecla !== 'x' || Tecla !== '-' || Tecla !== '+') && (Tecla === '1' || Tecla === '2' || Tecla === '3' || Tecla === '4' || Tecla === '5' || Tecla === '6' || Tecla === '7' || Tecla === '8' || Tecla === '9' || Tecla === '0' || Tecla === '.')) {
        if (Conta2 === 'N/A') {
          Conta2 = Tecla;
        } else {
          Conta2 += Tecla;
        }
        document.getElementById("Display").value = `${Conta1}${Operador}${Conta2}`;
      }

      if (Operador !== '' && Conta1 !== 'N/A' && Conta2 !== 'N/A' && (Tecla !== '/' || Tecla !== 'x' || Tecla !== '-' || Tecla !== '+' || Tecla !== '1' || Tecla !== '2' || Tecla !== '3' || Tecla !== '4' || Tecla !== '5' || Tecla !== '6' || Tecla !== '7' || Tecla !== '8' || Tecla !== '9' || Tecla !== '0' || Tecla !== '.') && (Tecla === '=') && (Resultado === 'N/A')) {
        if (Operador === '/') {
          Resultado = parseFloat(Conta1) / parseFloat(Conta2);
          document.getElementById("Display").value = `${Conta1}${Operador}${Conta2}=${Resultado}`;
        }
        if (Operador === 'x') {
          Resultado = parseFloat(Conta1) * parseFloat(Conta2);
          document.getElementById("Display").value = `${Conta1}${Operador}${Conta2}=${Resultado}`;
        }
        if (Operador === '+') {
          Resultado = parseFloat(Conta1) + parseFloat(Conta2);
          document.getElementById("Display").value = `${Conta1}${Operador}${Conta2}=${Resultado}`;
        }
        if (Operador === '-') {
          Resultado = parseFloat(Conta1) - parseFloat(Conta2);
          document.getElementById("Display").value = `${Conta1}${Operador}${Conta2}=${Resultado}`;
        }
      }

      if (Operador !== '' && Conta1 !== 'N/A' && Conta2 !== 'N/A' && Resultado === 'N/A' && (Tecla === '/' || Tecla === 'x' || Tecla === '-' || Tecla === '+') && (Tecla !== '=' || Tecla !== '1' || Tecla !== '2' || Tecla !== '3' || Tecla !== '4' || Tecla !== '5' || Tecla !== '6' || Tecla !== '7' || Tecla !== '8' || Tecla !== '9' || Tecla !== '0' || Tecla !== '.')) {
        if (Operador === '/') {
          if (Tecla === '/') {
            Resultado = parseFloat(Conta1) / parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            Operador = Tecla;
            Conta2 = 'N/A';
            Resultado = 'N/A';
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === 'x') {
            Resultado = parseFloat(Conta1) / parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            Operador = Tecla;
            Conta2 = 'N/A';
            Resultado = 'N/A';
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '+') {
            Resultado = parseFloat(Conta1) / parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            Operador = Tecla;
            Conta2 = 'N/A';
            Resultado = 'N/A';
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '-') {
            Resultado = parseFloat(Conta1) / parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            Operador = Tecla;
            Conta2 = 'N/A';
            Resultado = 'N/A';
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
        }

        if (Operador === 'x') {
          if (Tecla === '/') {
            Resultado = parseFloat(Conta1) * parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === 'x') {
            Resultado = parseFloat(Conta1) * parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '+') {
            Resultado = parseFloat(Conta1) * parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '-') {
            Resultado = parseFloat(Conta1) * parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
        }

        if (Operador === '+') {
          if (Tecla === '/') {
            Resultado = parseFloat(Conta1) + parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === 'x') {
            Resultado = parseFloat(Conta1) + parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '+') {
            Resultado = parseFloat(Conta1) + parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '-') {
            Resultado = parseFloat(Conta1) + parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
        }

        if (Operador === '-') {
          if (Tecla === '/') {
            Resultado = parseFloat(Conta1) - parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === 'x') {
            Resultado = parseFloat(Conta1) - parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '+') {
            Resultado = parseFloat(Conta1) - parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
          if (Tecla === '-') {
            Resultado = parseFloat(Conta1) - parseFloat(Conta2);
            Conta1 = parseFloat(Resultado);
            document.getElementById("Display").value = `${Conta1}${Tecla}`;
          }
        }
        Operador = Tecla;
        Conta2 = 'N/A';
        Resultado = 'N/A';
      }
    }
  }

  Limpar = () => {
    Operador = '';
    Conta1 = 'N/A';
    Conta2 = 'N/A';
    Resultado = 'N/A';
    document.getElementById("Display").value = '';
  }
}

ReactDOM.render(<Calculadora />, document.getElementById('Calculadora'));