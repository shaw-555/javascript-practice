# include <stdio.h>

int add(int a, int b){
    return (a+b);
}

int sub(int a, int b){
    return (a-b);
}

int time(int a, int b){
    return (a*b);
}

int complete(int x,int y,int (*func)()){
    int result;
    return (*func)(x,y);
}

int main(){
    int x,y;
    int a[3];
    x = 10;
    y = 2;
    a[0] = complete(x,y,add);
    a[1] = complete(x,y,sub);
    a[2] = complete(x,y,time);
    printf("%d,%d,%d",a[0],a[1],a[2])

}