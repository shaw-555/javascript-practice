# include <stdio.h>
int main()
{
    int a,b,c;
    a = 0;
    b =3;
    c = (a++) && (b=1);
    printf("%d",c);
}