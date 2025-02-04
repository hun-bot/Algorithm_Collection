#include <iostream>
#include <vector>
using namespace std;

void check(int N, int M, int start, vector<int> &comb)
{
    if (comb.size() == M)
    {
        for (int c : comb)
            cout << c << " ";
        cout << '\n';
        return;
    }
    for (int i = start; i <= N; i++)
    {
        comb.push_back(i);
        check(N, M, i + 1, comb);
        comb.pop_back();
    }
}

int main()
{
    int N, M;

    cin >> N >> M;

    vector<int> combination;
    check(N, M, 1, combination);
    return 0;
}