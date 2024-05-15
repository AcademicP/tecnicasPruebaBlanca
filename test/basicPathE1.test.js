const basicPath = require("../techniques/basicPath")
const assert =require('assert')

describe("Pruebas de Ruta basica", function(){

    it("camino1",function(){
        const result =  basicPath.calculate(1, 2, 3 );
        assert.equal(result, 1);
    });

    /*it("caminox",function(){
        const result =  basicPath.calculate(1, 2, 3 );
        assert.equal(result, 1);
    });

    it("caminoy",function(){
        const result =  basicPath.calculate(2, 3, 4 );
        assert.equal(result, 1);
    });

    it("caminoz",function(){
        const result =  basicPath.calculate(3, 4, 5 );
        assert.equal(result, 1);
    });*/

    it("camino2",function(){
        const result =  basicPath.calculate(50, 30, 10 );
        assert.equal(result, 30);
    });

    it("camino3",function(){
        const result =  basicPath.calculate(50, 10, 40 );
        assert.equal(result, 40);
    });

});