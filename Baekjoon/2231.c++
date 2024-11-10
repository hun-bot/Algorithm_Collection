#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
int checkNumber(int i){
    int sum=0;
    while(i>0){
        sum+=i%10;
        i/=10;
    }
    return sum;
}

int main() {
    int N;
    vector<int> numbers;
    cin >> N;
    for (int i = 1; i < N; i++) {
        if (i + checkNumber(i) == N) {
            numbers.push_back(i);
        }
    }
    
    if (!numbers.empty()) {
        int min = *min_element(numbers.begin(), numbers.end());
        cout << min << endl;
    } else {
        cout << 0 << endl;
    }
    
    return 0;
}