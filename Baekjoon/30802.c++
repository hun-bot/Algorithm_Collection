#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N;
    cin >> N;

    vector<int> sizes(6);
    for (int i = 0; i < 6; ++i) {
        cin >> sizes[i];
    }

    int T, P;
    cin >> T >> P;

    int count = 0;
    for (int i = 0; i < 6; ++i) {
        count+=(sizes[i]+T-1)/T;
    }

    int maxBundles = N / P;
    int remainingPens = N % P;

    cout << count << endl;
    cout << maxBundles << " " << remainingPens << endl;

    return 0;
}
