# include <stdio.h>
int max(int a, int b){
    int c ;
    c = a>b ? a:b;
    return c;
}

int main(){
    int a, b;
    int (*p)();
    int bigger;

    p = max;

    printf("please input a and b:\n");
    scanf("%d,%d",&a,&b);
    bigger = (*p)(a,b);
    printf("%d,%d\n",a,b);
    printf("%d\n",bigger);
}