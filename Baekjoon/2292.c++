#include <string>
#include <iostream>
using namespace std;

int main(){
    int N;
    cin >> N;
    if(N==1){
        cout << N;
        return 0;
    }

    int hexagon_room=1;
    int max=1;

    while (N>max){
        max+=6*hexagon_room;
        hexagon_room++;
    }
    cout << hexagon_room <<endl;
}