#include <iostream>
#include <cctype>
#include <cmath>
using namespace std;

int main(){
    int test_case;
    cin >> test_case;

    for(int i=0;i<test_case;i++){
    int x1,y1,r1,x2,y2,r2;
    cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;

    int d=pow(x1-x2,2)+pow(y1-y2,2); 
    int r_minus=pow(r1-r2,2);
    int r_plus=pow(r1+r2,2);

    if(d==0){
        if(r_minus==0) cout << "-1" << "\n";
        else cout << "0" << "\n";
    }
    else if(d==r_minus || d==r_plus){
        cout << "1" << "\n";
    }
    else if(r_minus<d && d<r_plus){
        cout << "2" << "\n";
    }
    else cout << "0" << "\n";
}
    return 0;
}