#include <iostream>
#include <vector>
#include <algorithm>
#include <sstream>
#include <unordered_set>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N;
    cin >> N;
    int packages = 0;
    while (N >= 0)
    {
        if (N % 5 == 0)
        {
            packages += N / 5;
            cout << packages << endl;
            return 0;
        }
        N -= 3;
        packages++;
    }
    cout << "-1" << endl;
    return 0;
}
