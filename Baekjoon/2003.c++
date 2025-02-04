#include <iostream>
#include <vector>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N, M;
    cin >> N >> M;
    vector<int> A(N);
    for (int i = 0; i < N; i++)
    {
        cin >> A[i];
    }
    int left = 0, right = 0, sum = 0, count = 0;
    while (right < N)
    {
        sum += A[right];
        right++;
        while (sum > M && left < right)
        {
            sum -= A[left];
            left++;
        }
        if (sum == M)
        {
            count++;
        }
    }
    cout << count;
    return 0;
}