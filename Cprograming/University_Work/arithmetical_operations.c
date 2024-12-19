#include <stdio.h>
#include <windows.h> 

int main(){
    int a, b;
    int sum, sub, mul, modulus;
    float division;
    a = 5;
    b = 2;
    sum = a + b;
    sub = a - b;
    mul = a * b;
    modulus = a % b;
    division = (float)a/2;

    printf("sum: %d\n", sum);
    printf("sub: %d\n", sub);
    printf("mul: %d\n", mul);
    printf("modulus: %d\n", modulus);
    printf("division: %f\n", division);

    return 0;
}