# include "stdio.h"

int change (int x,int y){
    int temp;
    temp = x;
    x = y;
    y = temp;
    return 0;
}

int main(){
    int a;
    int b;
    scanf("%d,%d",&a,&b);
    printf("a,b=");
    printf("%d,%d\n", a,b);
    change(a,b);
    printf("1\n");
    printf("%d,%d\n", a,b);
}