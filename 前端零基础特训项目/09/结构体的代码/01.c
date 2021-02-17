# include <stdio.h>

int main(){
    int size;
    struct date
    {
        /* data */
        int day;
        int month;
        int year;
    };
    struct date p1;
    size = sizeof(p1);

    printf("%d",size);
    return 0;
    
}