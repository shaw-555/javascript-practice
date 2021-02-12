#include <stdio.h>
#define time(n) n*n;

int main(){
    int res,res2;
    res = 27/time(3);
    res2 = 27/9;
    printf("res=%d\n",res);
    printf("res2=%d\n",res2);
}