# include <stdio.h>

int main(){
    char str[10], *p= str, *string = "China";
    char *country = "Japan";
    char sent[] = "science is organised knowledge,wisdom is organised life";
    int *scan;
    int a = 10;
    scan = &a;
    printf("%s\n",sent);
    printf('\0');
    // printf("%d\n",*scan);
    // printf("%s\n",country);
    // printf("%s\n",string);
    // printf("please input the str\n");
    // scanf("%s\n",str);
    // printf("%s\n",str);
}