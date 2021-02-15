# include <stdio.h>

int main()
{
    /* code */
    // a 和 *pa 是双向绑定的关系
    int a,*pa;
    a = 3;
    pa = &a;
    printf("%d,%d\n",a,*pa);
    *pa =300;
    printf("%d,%d\n",a,*pa);
    a = 10;
    printf("%d,%d\n",a,*pa);
    return 0;
}
