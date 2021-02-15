# include "stdio.h"

int main(){
    int a[10];
    int *p1 = a;
    int *p2 = &a[3];

    if(p2>p1){
        printf("true");
        // printf(p2,p1);
    }
}