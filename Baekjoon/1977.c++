#include <iostream>
#include <cmath>

int main(){
    int M,N;
    std::cin >> M >> N;
    
    int sum,lowest,temp_square,check=0;
    while(1){
        temp_square=sqrt(M);
        if(M==temp_square*temp_square){
            check++;
            if(check==1) lowest=M;
            sum+=M;
        }
        M++;
        if(M==N+1) break;
    }
    if(check==0) std::cout << -1;
    else std::cout << sum << '\n' << lowest;
    return 0;
}