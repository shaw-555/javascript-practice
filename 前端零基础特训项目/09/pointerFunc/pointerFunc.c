# include <stdio.h>

int *max(int a, int b){
    int *p;
    if (a>b){
        p = &a;
    }
    return p;
}

int main(){
    int a,b;
    int *p;

    printf("please input a and b:\n");
    scanf("%d,%d",&a,&b);
    p = max(a,b);
    printf("%d", *p);
}