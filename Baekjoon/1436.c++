#include <iostream>
#include <string>
using namespace std;

int check(int N)
{
    int count = 0;
    int number = 666;

    while (true)
    {
        if (to_string(number).find("666") != string::npos)
        {
            count++;
            if (count == N)
            {
                return number;
            }
        }
        number++;
    }
}

int main()
{
    int N;
    cin >> N;
    cout << check(N) << endl;
    return 0;
}
