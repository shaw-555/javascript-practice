# include <stdio.h>
# define Person struct person

Person {
    char name[10];
    int age;
    int height;
};

int main(){
    Person p1 = {"shaw",18,178};
    printf("%s,\n%d,\n%d,\n", p1.name, p1.age , p1.height);
}