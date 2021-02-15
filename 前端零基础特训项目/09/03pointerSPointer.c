# include "stdio.h"

int main(){
    int a, *p, **pp;

    a = 100;
    p = &a;
    pp = &p;
    // printf("true");
    printf("%d\n",*p);
    printf("%d\f",**pp);
    
}