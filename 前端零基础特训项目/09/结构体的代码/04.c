# include <stdio.h>
# define Person struct person
# define Date struct date

Person {
    int name;
    int day;
    int age;
    // Date date;
};

// Date {
//     int day;
//     int money;
//     int year;
// };

int main(){
    Person p1;
    printf("please input info of person\n");
    scanf("%d,%d,%d\n",&p1.name,&p1.day,&p1.age);
    printf("%d,%d,%d\n",p1.name,p1.day,p1.age);
}