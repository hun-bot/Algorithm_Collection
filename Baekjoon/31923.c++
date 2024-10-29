#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

bool solve(int N, int P, int Q, vector<int>& A, vector<int>& B) {
    vector<int> results(N);

    for (int i = 0; i < N; ++i) {
        int diff = B[i] - A[i];
        int g = __gcd(P,Q);

        cout << diff << ' ' << g << '\n';

        if (diff % g != 0) {
            return false; 
        }

        int P_reduced = P / g;
        int Q_reduced = Q / g;
        int diff_reduced = diff / g;

        int inverse_P = 0, y = 0;
        bool found = false;

        for (int x = 0; x <= 10000; ++x) {
            if ((diff_reduced - x * P_reduced) % Q_reduced == 0) {
                y = (diff_reduced - x * P_reduced) / Q_reduced;
                if (0 <= y && y <= 10000) {
                    results[i] = x;
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            return false;
        }
    }

    cout << "YES" << endl;
    for (int i = 0; i < N; ++i) {
        cout << results[i] << " ";
    }
    cout << endl;

    return true;
}


int main() {
    int N, P, Q;
    cin >> N >> P >> Q;

    vector<int> A(N), B(N);
    for (int i = 0; i < N; ++i) {
        cin >> A[i];
    }
    for (int i = 0; i < N; ++i) {
        cin >> B[i];
    }
    bool result=solve(N,P,Q,A,B);
    if (!result) {
        cout << "NO" << endl;
    }

    return 0;
}


