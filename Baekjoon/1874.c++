#include <iostream>
#include <vector>
#include <algorithm>
#include <sstream>
#include <stack>
#include <unordered_set>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int N;
    cin >> N;
    vector<int> ans(N);

    for (int i = 0; i < N; i++)
        cin >> ans[i];

    stack<int> st;
    string push_and_pop;

    int current_number = 1;
    for (int i = 0; i < N; i++)
    {
        int check = ans[i];

        while (current_number <= check)
        {
            st.push(current_number);
            push_and_pop += '+';
            push_and_pop += '\n';
            current_number++;
        }
        if (st.top() == check)
        {
            st.pop();
            push_and_pop += '-';
            push_and_pop += '\n';
        }
        else
        {
            cout << "NO" << endl;
            return 0;
        }
    }
    cout << push_and_pop;
    return 0;
}
