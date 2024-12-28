#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

long long bc(int n, int r)
{
    if (r > n - r)
    {
        r = n - r;
    }

    long long result = 1;
    for (int i = 0; i < r; ++i)
    {
        result *= (n - i);
        result /= (i + 1);
    }
    return result;
}
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N, K;
    cin >> N >> K;

    long long result = bc(N, K);
    cout << result;
    return 0;
}