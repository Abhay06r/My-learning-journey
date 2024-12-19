#include <stdio.h>
#include <windows.h>

int main(){
    // Declaring and stroing the value of pi in a variable
    int r;
    printf("Enter the value of radius: ");
    scanf(" %d", &r);
    float pie;
    pie = 3.14;

    float area;
    // Calculate the area of circle
    area = pie * r * r;

    printf("Area of circle is: %.2f", area);

    return 0;
}