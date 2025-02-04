#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int T;
    cin >> T;

    while (T--)
    {
        int k, n;
        cin >> k >> n;

        vector<int> apart(n + 1, 0);

        for (int i = 1; i <= n; i++)
        {
            apart[i] = i;
        }

        for (int i = 1; i <= k; i++)
        {
            for (int j = 2; j <= n; j++)
            {
                apart[j] += apart[j - 1];
            }
        }

        cout << apart[n] << endl;
    }

    return 0;
}
