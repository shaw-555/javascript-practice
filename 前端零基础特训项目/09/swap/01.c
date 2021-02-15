# include <stdio.h>

int change(int *p1,int *p2)
{
    int p;
    p = *p1;
    *p1 = *p2;
    *p2 = p;
    return 0;
}

int main() {
    int a,b;
    int *pa,*pb;
    printf("please input a and b\n");
    scanf("%d,%d", &a,&b);
    pa = &a,pb =&b;
    if(a<b) change(pa,pb);
    printf("%d,%d\n",a,b); 
    return 0;
}