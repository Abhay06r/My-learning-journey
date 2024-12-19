#include <stdio.h>

int main(){
    //To find the sum of individual digits of a given positive integer
    int num, rem, sum=0;

    // Input the number
    printf("Enter a positive integer: ");
    scanf("%d", &num);
    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = num / 10;
    }
  printf("Sum of individual digits of the number is: %d\n", sum);

    return 0;
}