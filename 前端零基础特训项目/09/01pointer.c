# include "stdio.h"

int main(){
    int a;
    int b;
    int *p1;
    int *p2;

    p1 = &a;
    p2 = &b;
    scanf("%d",p1);
    scanf("%d",p2);
    printf("a,b=");
    printf("%d,%d\n",a,b);
    printf("%d,%d\n",*p1,*p2);
}