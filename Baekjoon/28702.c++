#include <iostream>
#include <string>
using namespace std;

string getFizzBuzz(int num) {
    if (num % 15 == 0) return "FizzBuzz";
    else if (num % 3 == 0) return "Fizz";
    else if (num % 5 == 0) return "Buzz";
    else return to_string(num);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    
    int temp,idx;
    for(int i=0;i<3;i++){
        string fizzbuzz;
        cin >> fizzbuzz;
        if(fizzbuzz!="FizzBuzz" && fizzbuzz!="Fizz" && fizzbuzz != "Buzz"){
            idx=i;
            temp=stoi(fizzbuzz);
        }
    }
    temp=temp+(3-idx);
    cout << getFizzBuzz(temp) << '\n';
}   
