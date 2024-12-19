#include <stdio.h>

void main(){
    // taking number from user
    int num, lastdigit;
    printf("Enter a number: ");
    scanf("%d", &num);

    // printing the last digit of the number 
    lastdigit = num % 10;
    printf("Last digit of the number is: %d", lastdigit);

}