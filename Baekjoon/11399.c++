#include <iostream>
#include <unordered_set>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N;
    cin >> N;
    vector<int> times;

    for (int i = 0; i < N; i++)
    {
        int t;
        cin >> t;
        times.push_back(t);
    }
    sort(times.begin(), times.end());

    int total = 0;
    int hap = 0;

    for (int t : times)
    {
        hap += t;
        total += hap;
    }
    cout << total;
    return 0;
}