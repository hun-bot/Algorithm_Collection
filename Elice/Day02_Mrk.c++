#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <sstream>
using namespace std;

int main() {
    int array_length,repeat;
    string getNumbers;
    cin >> array_length >> repeat;
    cin.ignore(array_length,'\n');
    vector<int> inputed_numbers(array_length);
    inputed_numbers.clear();

    getline(cin,getNumbers);

    stringstream ss(getNumbers);
    string temp;
    while(getline(ss,temp,' ')){
        inputed_numbers.push_back(stoi(temp));
    }

    for(int h=0;h<repeat;++h){
        int i,j,k;
        cin >> i >> j >> k;
        vector<int> sliced_arr(inputed_numbers.begin()+i-1,inputed_numbers.begin()+j);
        sort(sliced_arr.begin(),sliced_arr.end());
        cout << sliced_arr.at(k-1) << endl;
    }
}
