#include <iostream>
#include <unordered_map>
#include <algorithm>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N;
    cin >> N;
    unordered_map<int, int> numbers;

    while (N--)
    {
        int i;
        cin >> i;
        numbers[i]++;
    }
    int M;
    cin >> M;
    while (M--)
    {
        int check;
        cin >> check;
        cout << numbers[check] << " ";
    }
    return 0;
}
