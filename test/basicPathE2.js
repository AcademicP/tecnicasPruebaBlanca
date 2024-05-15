const basicPath = require("../techniques/basicPath")
const assert =require('assert')

describe("Pruebas de Ruta basica Ejercicio 2", function(){

    it("camino1",function(){
        const result =  basicPath.calculate2(1 );
        assert.equal(result, 1);
    });
    it("camino2",function(){
        const result =  basicPath.calculate2(50 );
        assert.equal(result, 30);
    });
    it("camino3",function(){
        const result =  basicPath.calculate2(50 );
        assert.equal(result, 40);
    });
    it("camino4",function(){
        const result =  basicPath.calculate2(50 );
        assert.equal(result, 40);
    });

});