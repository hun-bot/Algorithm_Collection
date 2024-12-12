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

    int N, M;
    int count;
    unordered_set<int> numbers;

    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int num;
        cin >> num;
        numbers.insert(num);
    }
    cin >> M;
    for (int i = 0; i < M; i++)
    {
        int check;
        cin >> check;

        if (numbers.count(check) > 0)
            cout << "1" << '\n';
        else
            cout << "0" << '\n';
    }
    return 0;
}
