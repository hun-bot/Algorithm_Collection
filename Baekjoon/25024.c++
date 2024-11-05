#include <iostream>
using namespace std;

int eachDaysInMonth[13] = { 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

bool isValidTime(int x, int y) {
    return (0 <= x && x <= 23) && (0 <= y && y <= 59);
}

bool isValidDate(int x, int y) {
    
    return (1 <= x && x <= 12) && (1 <= y && y <= eachDaysInMonth[x]);
}

int main() {
    int T;
    cin >> T;
    
    while (T--) {
        int x, y;
        cin >> x >> y;

        string timeValid = isValidTime(x, y) ? "Yes" : "No";
        
        string dateValid = isValidDate(x, y) ? "Yes" : "No";

        cout << timeValid << " " << dateValid << endl;
    }
    
    return 0;
}
