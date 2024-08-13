#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <sstream>
using namespace std;

int main(){
    int n,m,k;
    cin >> n >> m >> k;

    string infested_computer;
    cin.ignore(k,'\n');
    
    getline(cin,infested_computer);
    if(infested_computer.size()-k+1!=k) return -1;

    string logs;
    vector<vector<int>> file_log;
    vector<string> each_file_log;
    for(int i=0;i<m;i++){
        getline(cin,logs);
        each_file_log.push_back(logs);
    }
    for(auto i: each_file_log) cout<< '<' << i  << '>' << '\n';
}