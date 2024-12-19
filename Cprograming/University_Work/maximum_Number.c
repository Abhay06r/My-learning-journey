#include <stdio.h>

void main(){


    // Taking input from user of two numbers for printing maximum number
    int num1, num2;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);


    // Comparing the numbers and printing the maximum number
    if(num1 < num2){
        printf("Maximum number is : %d\n", num2);
    }else{
        printf("Maximum number is : %d\n", num1);
    }

}