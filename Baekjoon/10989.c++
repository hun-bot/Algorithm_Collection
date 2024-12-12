#include <iostream>
using namespace std;

const int MAX_VALUE = 10000;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    int count[MAX_VALUE + 1] = {0};

    for (int i = 0; i < N; i++) {
        int num;
        cin >> num;
        count[num]++;
    }

    for (int i = 1; i <= MAX_VALUE; i++) {
        for (int j = 0; j < count[i]; j++) {
            cout << i << '\n';
        }
    }

    return 0;
}
