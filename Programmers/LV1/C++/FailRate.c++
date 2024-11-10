#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

bool compare(const pair<int, double>& a, const pair<int, double>& b) {
    if (a.second == b.second) {
        return a.first < b.first;
    }
    return a.second > b.second;  
}

vector<int> solution(int N, vector<int> stages) {
    vector<int> answer;
    vector<pair<int, double>> failed; 

    int total_user = stages.size();

    for (int i = 1; i <= N; i++) {
        int stage = count(stages.begin(), stages.end(), i);
        double fail_rate = (total_user > 0) ? static_cast<double>(stage) / total_user : 0.0;
        failed.push_back({i, fail_rate});
        total_user -= stage;
    }

    sort(failed.begin(), failed.end(),compare);

    for (const auto& p : failed) {
        answer.push_back(p.first);
    }

    return answer;
}
