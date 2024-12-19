#include <stdio.h>

void main(){
    // Taking input of year
    int year;
    printf("Enter the year: ");
    scanf("%d", &year);

    // Checking the leap year
    if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0){
                printf("%d is a leap year.", year);
            }else{
                printf("%d is not a leap year.", year);
            }
}