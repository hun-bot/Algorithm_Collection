#include <iostream>
#include <string>

using namespace std;

int countSteps(const string& str) {
   int count = 0;

   for (char c : str) {
       if (c == 'D')  break;
       count++;
   }
   return count;
}

int main() {
   int T;
   cin >> T;
   for (int i = 0; i < T; i++) {
       string test;
       cin >> test;
       int steps = countSteps(test);
       cout << steps << endl;
   }

   return 0;
}