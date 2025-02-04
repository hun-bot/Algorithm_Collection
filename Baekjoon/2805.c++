#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

typedef long long ll;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N, M;
    cin >> N >> M;
    vector<int> trees(N);
    for (int i = 0; i < N; i++)
    {
        cin >> trees[i];
    }
    int left = 0, right = *max_element(trees.begin(), trees.end()), sum = 0;
    while (left <= right)
    {
        int mid = (left + right) / 2;
        ll total = 0;
        for (int t : trees)
        {
            if (t > mid)
            {
                total += t - mid;
            }
        }
        if (total >= M)
        {
            sum = mid;
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    cout << sum;
    return 0;
}