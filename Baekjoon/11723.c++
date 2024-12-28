#include <iostream>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int M;
    cin >> M;
    int s[21] = {0};

    while (M--)
    {
        string cmd;
        int x = 0;
        cin >> cmd;

        if (cmd == "add")
        {
            cin >> x;
            s[x] = 1;
        }
        else if (cmd == "remove")
        {
            cin >> x;
            s[x] = 0;
        }
        else if (cmd == "check")
        {
            cin >> x;
            cout << (s[x] ? "1\n" : "0\n");
        }
        else if (cmd == "toggle")
        {
            cin >> x;
            s[x] = !s[x];
        }
        else if (cmd == "all")
        {
            fill(s + 1, s + 21, 1);
        }
        else if (cmd == "empty")
        {
            fill(s + 1, s + 21, 0);
        }
    }
    return 0;
}
