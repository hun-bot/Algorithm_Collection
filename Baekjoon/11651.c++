#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int N;
    vector<pair<int, int>> coordinate;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int x, y;
        cin >> x >> y;
        coordinate.push_back({x, y});
    }

    sort(coordinate.begin(), coordinate.end(), [](const pair<int, int> &a, const pair<int, int> &b)
         {
        if (a.second == b.second)
            return a.first < b.first;
        return a.second < b.second; });

    for (int i = 0; i < N; i++)
    {
        cout << coordinate[i].first << " " << coordinate[i].second << '\n';
    }
    return 0;
}
