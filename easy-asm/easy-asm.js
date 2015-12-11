(function () {
  "use strict";

  var easm = {
    registers: {
      ax: 0,
      bx: 0,
      cx: 0,
      dx: 0
    },
    stack: [],
    regPat: /ax|bx|cx|dx/,
    source: "",
    init: function () {
      this.registers.ax = 0;
      this.registers.bx = 0;
      this.registers.cx = 0;
      this.registers.dx = 0;
      this.stack = [];
      this.source = "";
    },
    mov: function (dest, val) {
      this.registers[dest] = val;
    },
    inc: function (dest) {
      this.registers[dest] += 1;
    },
    dec: function (dest) {
      this.registers[dest] -= 1;
    },
    add: function (a, b) {
      if (b.match(this.regPat)) {
        this.registers[a] += this.registers[b];
      } else {
        this.registers[a] += Number(b);
      }
    },
    sub: function (a, b) {
      if (b.match(this.regPat)) {
        this.registers[a] -= this.registers[b];
      } else {
        this.registers[a] -= Number(b);
      }
    },
    mul: function (a, b) {
      if (b.match(this.regPat)) {
        this.registers[a] *= this.registers[b];
      } else {
        this.registers[a] *= Number(b);
      }
    },
    div: function (a, b) {
      if (b.match(this.regPat)) {
        this.registers[a] /= this.registers[b];
      } else {
        this.registers[a] /= Number(b);
      }
    },
    push: function (val) {
      if (val.match(this.regPat)) {
        this.stack.push(this.registers[val]);
      } else {
        this.stack.push(Number(val));
      }
    },
    pop: function (dest) {
      this.registers[dest] = this.stack.pop();
    },
    echo: function (rg) {
      var out = document.getElementById("output");
      out.value += this.registers[rg] + "\n";
    },
    error: function (message, line) {
      var out = document.getElementById("output");
      out.value += "Error at line " + line + ": " + message + "\n";
    },
    dump: function () {
      var out = document.getElementById("output");
      out.value += "Stack: " + this.stack.join() + "\n";
    },
    clear: function () {
      var out = document.getElementById("output");
      out.value = "";
    },
    getSource: function (input) {
      this.source = input;
    },
    execute: function () {
      var codeLines = this.source.split("\n"),
        commandPattern,
        isCommand,
        command,
        operation,
        a,
        b;
      codeLines.forEach(function (currentValue, index, array) {
        commandPattern = /^([a-z]{3,4})\s+([a-z]{2}),?\s*([a-z0-9]+)?(\s*;[\w\W]*)?$/;
        isCommand = commandPattern.test(currentValue);

        if (isCommand) {
          command   = currentValue.match(commandPattern);
          operation = command[1];
          a         = command[2];

          if (typeof command[3] === "undefined") {
            b = "";
          } else {
            b = command[3];
          }
          easm.parse(index, operation, a, b);
        }
      });
    },
    parse: function (index, operation, a, b) {
      switch (operation) {
      case "mov":
        this.mov(a, b);
        break;
      case "inc":
        this.inc(a);
        break;
      case "dec":
        this.dec(a);
        break;
      case "add":
        this.add(a, b);
        break;
      case "sub":
        this.sub(a, b);
        break;
      case "mul":
        this.mul(a, b);
        break;
      case "div":
        this.div(a, b);
        break;
      case "push":
        this.push(a);
        break;
      case "pop":
        this.pop(a);
        break;
      case "echo":
        this.echo(a);
        break;
      case "dump":
        this.dump();
        break;
      default:
        easm.error(operation + " command type not exists, please check manual", index);
        return;
      }
    }
  },
    runBtn = document.getElementById("run"),
    input = document.getElementById("code");

  document.addEventListener("DOMContentLoaded", function (e) {
    runBtn.addEventListener("click", function (e) {
      easm.clear();
      easm.init();
      easm.getSource(input.value);
      easm.execute();
    });
  });
}());
