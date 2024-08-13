#include <iostream>
#include <vector>
#include <set>
#include <array>

using namespace std;

int main() {
    int T;
    cin >> T;

    // 정육면체의 각 면을 정의
    array<set<int>, 6> faces = {
        set<int>{0, 1, 2, 3},
        set<int>{4, 5, 6, 7},
        set<int>{0, 1, 4, 5},
        set<int>{2, 3, 6, 7},
        set<int>{0, 2, 4, 6},
        set<int>{1, 3, 5, 7}
    };

    while (T--) {
        int a, b, c, d;
        cin >> a >> b >> c >> d;

        // 주어진 네 점을 set에 넣음
        set<int> points = {a, b, c, d};

        bool found = false;

        // 각 면과 비교하여 같은 면인지 확인
        for (const auto& face : faces) {
            if (face == points) {
                found = true;
                break;
            }
        }
        if (found) {
            cout << "YES\n";
        } else {
            cout << "NO\n";
        }
    }

    return 0;
}
