#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N, M;
    cin >> N >> M;
    unordered_map<string, string> sites;
    while (N--)
    {
        string site, password;
        cin >> site >> password;
        sites[site] = password;
    }
    while (M--)
    {
        string find_site;
        cin >> find_site;
        if (sites.find(find_site) != sites.end())
        {
            cout << sites[find_site] << '\n';
        }
    }
    return 0;
}