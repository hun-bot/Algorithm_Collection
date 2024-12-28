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
    int N, M;
    cin >> N >> M;
    unordered_set<string> names;
    vector<string> ans;
    int count = 0;

    for (int i = 0; i < N; i++)
    {
        string unheard_name;
        cin >> unheard_name;
        names.insert(unheard_name);
    }
    for (int i = 0; i < M; i++)
    {
        string unseened_name;
        cin >> unseened_name;
        if (names.count(unseened_name))
        {
            ans.push_back(unseened_name);
            count++;
        }
    }
    sort(ans.begin(), ans.end());

    cout << count << endl;

    for (const string &name : ans)
    {
        cout << name << endl;
    }
    return 0;
}