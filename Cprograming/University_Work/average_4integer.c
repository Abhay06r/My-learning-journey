#include <stdio.h>
#include <windows.h>

void main(){
    // Average of 4 integer

    int a, b, c, d, average;
    printf("Enter the first integer: ");
    scanf("%d", &a);

    printf("Enter the second integer: ");
    scanf("%d", &b);

    printf("Enter the third integer: ");
    scanf("%d", &c);

    printf("Enter the fourth integer: ");
    scanf("%d", &d);

    //calculate the average of 4 integer
    average = (a + b + c + d) / 4;
    printf("The average of 4 integer is: %d", average);

}