#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

int main() {
    int n,compare=0;
    cin >> n;
    string permute;
    permute=to_string(n);
    if(next_permutation(permute.begin(),permute.end())){
        compare=stoi(permute);
        if(compare<n) return -1;
        else cout << compare;
    }
    return 0;
}
