#include <iostream>

int main(){
    int T;
    std::cin >> T;
    const int MAX=40;

    int zeroCount[MAX+1]={0};
    int oneCount[MAX+1]={0};
    
    zeroCount[0] = 1;
    oneCount[0] = 0;
    zeroCount[1] = 0;
    oneCount[1] = 1;

    // DP
    for (int i = 2; i <= MAX; ++i) {
        zeroCount[i] = zeroCount[i - 1] + zeroCount[i - 2];
        oneCount[i] = oneCount[i - 1] + oneCount[i - 2];
    }

    for (int i = 0; i < T; ++i) {
        int N;
        std::cin >> N;
        std::cout << zeroCount[N] << " " << oneCount[N] << std::endl;
    }

    return 0;
}