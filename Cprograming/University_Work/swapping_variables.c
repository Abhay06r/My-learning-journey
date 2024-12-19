#include <stdio.h>

void main(){
    int num1, num2, num3;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    num3 = num1;
    num1 = num2;
    num2 = num3;
    printf("num1 = %d\n", num1);
    printf("num2 = %d\n", num2);

}