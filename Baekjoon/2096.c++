#include <iostream>
#include <vector>
#include <algorithm>
#include <sstream>
#include <stack>
#include <queue>
#include <unordered_set>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int N;
    cin >> N;

    int max_dp[3] = {0, 0, 0};
    int min_dp[3] = {0, 0, 0};
    for (int i = 0; i < N; i++)
    {
        int a, b, c;
        cin >> a >> b >> c;

        int prev_max[3] = {max_dp[0], max_dp[1], max_dp[2]};
        int prev_min[3] = {min_dp[0], min_dp[1], min_dp[2]};

        max_dp[0] = max(prev_max[0], prev_max[1]) + a;
        max_dp[1] = max({prev_max[0], prev_max[1], prev_max[2]}) + b;
        max_dp[2] = max(prev_max[1], prev_max[2]) + c;

        min_dp[0] = min(prev_min[0], prev_min[1]) + a;
        min_dp[1] = min({prev_min[0], prev_min[1], prev_min[2]}) + b;
        min_dp[2] = min(prev_min[1], prev_min[2]) + c;
    }

    cout << max({max_dp[0], max_dp[1], max_dp[2]}) << " " << min({min_dp[0], min_dp[1], min_dp[2]});

    return 0;
}
