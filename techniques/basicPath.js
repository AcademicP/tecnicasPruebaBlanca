
module.exports={
    //Caminos:             Entrada                   Salida
    //C1: p1,p2,p4,p5,p6,F p1:v,p2:f,p4:v,p5:?,p6:?  a=c
    //C2: p1,p2,p3,p6,F    p1:v,p2:v,p3:?,p6:?       a=b
    //C3: p1,p6,F          p1:f,p6:?                 a
    calculate:function(a, b, c){
        if(a==50){ //p1
            if(b>c){ //p2
                a=b; //p3
            }else{ //p4
                a=c; //p5
            }
        }
        return a;//p6
    },
    //Nro flechas - Nro Nodos + 2 (13-11+2) = 4
    //Caminos:             Entrada                   Salida
    //C1: p1,p2,p4,p5,p6,p7,p8,p7,p9,F p1:v,p2:f,p4:v,p5:?,p6:?  a=c
    //C2: p1,p2,p3,p6,p7,p9,F    p1:v,p2:v,p3:?,p6:?       a=b
    //C3: p1,p6,p7,p9,F          p1:f,p6:?                 a
    //C4: 
    calculateWhile:function(a, b, c){
        if(a==50){ //p1
            if(b>c){ //p2
                a=b; //p3
            }else{ //p4
                a=c; //p5
            }
        }
        i=0;//p6
        while(i<10){//p7
            a=a+1;//p8
        }
        return a;//p9
    },
    //I,L2_3_4_5, L6, L7, L11,L6,L7,L8_9,L13,L14,F 
    //I,L2_3_4_5, L6, L7, L11,L6,L7,L8_9,L13,F 
    //I,L2_3_4_5, L6, L7, L8_9,L13,L14,F
    //I,L2_3_4_5, L6, L7, L11,L6,L13,L14,F
    //I,L2_3_4_5, L6, L7, L11,L6,L13,F
    //I,L2_3_4_5, L6, L13,L14,F
    //I,L2_3_4_5, L6, L13,F
    calculate2:function(n){
        let index; 
        index = 2; 
        while (index <= n - 1) { 
            if (n % index == 0) { 
                console.log("It is not a prime number"); 
                break; 
            } 
            index++; 
        } 
        if (index == n) 
            console.out("It is a prime number"); 
        
        
    }
}
