#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int white_repainting(vector<string> CB,int x, int y){
    int repaints=0;
    for (int i = 0; i < 8; i++){
        for (int j = 0; j < 8; j++){
            char expected=((i+j)%2==0) ? 'W' : 'B';
            if(CB[x+i][y+j]!=expected) repaints++;
        }
    }
    return repaints;
}

int black_repainting(vector<string> CB,int x, int y){
    int repaints=0;
    for (int i = 0; i < 8; i++){
        for (int j = 0; j < 8; j++){
            char expected=((i+j)%2==0) ? 'B' : 'W';
            if(CB[x+i][y+j]!=expected) repaints++;
        }
    }
    return repaints;
}
int main() {
    int N,M;
    cin >> N >> M;
    vector<string> chess_board(N);
    for(int i=0;i<N;i++){
        cin >> chess_board[i];
    }
    
    int min_repaint=64;
    // check board
    for (int i = 0; i <= N-8; i++){
        for (int j = 0; j <= M-8; j++){
            int white_start=white_repainting(chess_board,i,j);
            int black_start=black_repainting(chess_board,i,j);

            min_repaint = min(min_repaint, min(white_start, black_start));
        }
    }
    cout << min_repaint << endl;
    return 0;
}
