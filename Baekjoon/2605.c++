#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n; 
    cin >> n;

    vector<int> numbers(n); 
    for (int i = 0; i < n; i++) {
        cin >> numbers[i];
    }
    
    vector<int> line;

    for (int i = 0; i < n; i++) {
        line.insert(line.begin() + numbers[i],i+1);
    }
    reverse(line.begin(),line.end());

    for(vector<int>::iterator it=line.begin();it!=line.end();++it){
        cout << *it << ' ';
    }
    return 0;
}
